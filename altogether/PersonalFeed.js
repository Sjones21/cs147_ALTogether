import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Modal} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'

//import { Audio } from ''
import { Card, ListItem, Button,} from 'react-native-elements'
import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InfoButtonModal from './src/components/InfoButtonModal';




//import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let customFonts = {
  //'AriataDisplay-Regular': require('./assets/fonts/AriataDisplay-Regular.otf'),
  //'PFDin-Regular6': require('./assets/fonts/PFDin-Regular6.ttf'),
  // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};



export default class PersonalFeed extends Component {


  constructor({route, navigation}) {
    super();

    // change all of this
    this.state =  {
      selectedImage: null,
      ImageID: null,
      isModalVisible: false,
      currentPhoto: IMAGES.dani1,
      userHasViewedAltText: false,
    };

    this.handleModal = this.handleModal.bind(this)

  }

  /*renderModal = () => {
    let popUpMessage = 'dani did not write alt text! Would you like to encourage them to make their post more accessible?'
    let buttonLabel = 'Nudge'
    return (
      <View style={styles.modalContainer}>
        <View
          style={[styles.bottomPopUp, {height: windowHeight * .25, width: windowWidth}]}>
          <Text> {popUpMessage} </Text>
          <TouchableOpacity
            style={styles.popUpButton}
            onPress={() => this.setState({ isModalVisible: false })}>
            <Text style={styles.popUpButtonLabel}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}*/

handleModal = (photo) => {
  this.setState({
    isModalVisible: true,
    currentPhoto: photo,
  })
}

renderModal = () => {
  let photo = this.state.currentPhoto;

  if (!photo.hasAltText && photo.poster === 'sydney') {
    return (
      <View style={styles.modalContainer}>
        <View
          style={[styles.popUpContainer, {height: windowHeight * .30, width: windowWidth}]}>
          <View style={{height: 5, width: 40, marginBottom: 20, backgroundColor: '#DBDBDB', borderRadius: 20}}></View>
          <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>

            <View style={{margin: 20}}>
              <Text style={styles.popUpTitle}>
                You did not write alt text!</Text>
              <Text style={styles.popUpDescription}>
                Would you like to make your post more accessible?</Text>
            </View>

            <TouchableOpacity
              style={[styles.popUpButton, {width: 200}]}
              onPress={() => this.handleEditButton()}>
              <Text style={styles.popUpButtonLabel}>Add alt text</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }


  return (
    <View style={styles.modalContainer}>
      <View
        style={[styles.popUpContainer, {height: windowHeight * .30, width: windowWidth}]}>
        <View style={{height: 5, width: 40, backgroundColor: '#DBDBDB', borderRadius: 20}}></View>
        {/*<View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={{marginTop: 50}}>
            <Text style={styles.popUpDescription}>Alt text: {this.state.currentPhoto.altText}</Text>
          </View>

          <TouchableOpacity
            style={[styles.popUpButton, {width: 125}]}
            onPress={() => this.handleEditButton()}>
            <Text style={styles.popUpButtonLabel}>Edit</Text>
          </TouchableOpacity>*/}

        <View style={{flexDirection:'row'}}>

        <Text style={[styles.popUpTitle, {marginBottom:0, marginLeft: 150, marginTop:20, padding:0}]}>Alt text</Text>
        <View style = {{flexDirection:'row', marginTop:22, marginLeft:10,  marginRight:30,}}>
        <InfoButtonModal ></InfoButtonModal>
        </View>
        <TouchableOpacity style={[styles.popUpButton,{marginTop: 19, padding:2, paddingTop:5, paddingLeft:0, height: 30, width:60}]}><Text style={[styles.popUpButtonLabel, {fontSize:16, textAlign:'center'}]}>Edit</Text></TouchableOpacity>

        </View>
        <View style={{flex: 1, justifyContent:'space-around'}}>
          <Text style={[styles.popUpDescription, {marginTop:0, padding:0}]}>{this.state.currentPhoto.altText}</Text>
        </View>
      </View>
    </View>
  );
}

handleEditButton = () => {
  this.setState({ isModalVisible: false });
}

  render() {

    let images = [];
    for (const [key, value] of Object.entries(IMAGES)) {
      if (value.poster === 'sydney') {
        images.push(
          <CardComponent
            key={`${key+this.state.userHasViewedAltText}`}
            thumbnail={`${value.thumbnail}`}
            photo={value}
            likes={`${value.likes}`}
            nb_commentaires={`${value.comments}`}
            pseudo={`${value.poster}`}
            date="01/01/2018"
            description= {`${value.caption}`}
            handleAltTextViewCallback =  {(() => {this.setState({userHasViewedAltText: true})}) }
            userHasViewedAltText = {`${this.state.userHasViewedAltText}`}
            onModal={(photo) => this.handleModal(photo)}/>
        );
      }
    }

      return(
          <View
            style={styles.container}>
            {/* Feed Container */}
            <View style={styles.contentContainer}>

              {/* Photos in feed */ }
              <Content style={{backgroundColor: 'white'}}>
                {images}
              </Content>

              {/* Bottom Popup and Overlay */}
              <Modal
                visible={this.state.isModalVisible}
                animationType='none'
                transparent={true}>

                {/* Black overlay */}
                <TouchableOpacity
                    style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}
                    activeOpacity={1}
                    onPressOut={() => this.setState({isModalVisible: false})}>

                    {/* Bottom Popup itself */}
                    {this.renderModal()}

                </TouchableOpacity>
              </Modal>


              </View>
          {/* Navigation Bar */}
          <NavBar
            selected='feed'
            navigation={this.props.navigation}/>
        </View>
      );
    }
}

export {PersonalFeed};
