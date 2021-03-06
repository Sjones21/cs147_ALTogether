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



export default class PersonalFeedAlt extends Component {


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
        <View style={[styles.popUpContainer, {height: windowHeight * .35, width: windowWidth}]}>

          <View style={styles.popUpHeader}>
          <View style={{height: 5, width: 40, backgroundColor: '#DBDBDB', borderRadius: 20, marginBottom: 15}}></View>
          <Text style={[styles.popUpTitle, {marginBottom: 0}]}>
            ALTogether
          </Text>
          <View style={{marginTop:2, position: 'absolute', top: 20, right: 20}}>
            <InfoButtonModal ></InfoButtonModal>
          </View>
          </View>

          <View style={{flex: 1, justifyContent: 'space-around'}}>

          <View style={{flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
            <Text style={[styles.popUpDescription, {fontWeight: 'bold', marginBottom: 5}]}>You did not write alt text!</Text>
            <Text style={styles.popUpDescription}>Would you like to make your post more accessible?</Text>
          </View>
          </View>

            <TouchableOpacity
              style={[styles.popUpButton, {width: 200, alignSelf: 'center'}]}
              onPress={() => this.handleAddButton()}>
              <Text style={styles.popUpButtonLabel}>Add alt text</Text>
            </TouchableOpacity>

        </View>
      </View>


    );
  }


  return (

    <View style={styles.modalContainer}>
    <View style={[styles.popUpContainer, {height: windowHeight * .30, width: windowWidth}]}>

      <View style={styles.popUpHeader}>
      <View style={{height: 5, width: 40, backgroundColor: '#DBDBDB', borderRadius: 20, marginBottom: 15}}></View>
      <Text style={[styles.popUpTitle, {marginBottom: 0}]}>
        Alt text
      </Text>
      <View style={{marginTop:2, position: 'absolute', top: 20, right: 20}}>
        <InfoButtonModal ></InfoButtonModal>
      </View>
      </View>

      <View style={{flex: 1, justifyContent: 'space-around'}}>

      <View style={{flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
        <Text style={styles.popUpDescription}>{this.state.currentPhoto.altText}</Text>
      </View>
      </View>

        <TouchableOpacity
          style={[styles.popUpButton, {width: 200, alignSelf: 'center'}]}
          onPress={this.handleAddButton}>
          <Text style={styles.popUpButtonLabel}>Edit</Text>
        </TouchableOpacity>

    </View>
  </View>

  );
}

handleAddButton = () => {
  this.props.navigation.navigate('EditAltogetherGuided', {
    image_id: this.state.currentPhoto.id,
    userNeedsOnboard: this.state.userNeedsOnboard,
    userNeedsOnboardCallback: this.state.userNeedsOnboardCallback
  });
  this.setState({ isModalVisible: false });
  this.state.currentPhoto.hasAltText = true;
}

  render() {

    let images = [];
    let totalPosts = 0;
    for (const [key, value] of Object.entries(IMAGES)) {
      if (!value.hasAltText && value.poster === 'sydney') {
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
        totalPosts += 1;
      }
      
    }

    if(totalPosts === 0){
      
    return(
      <View
            style={styles.container}>
            {/* Feed Container */}
            <View style={styles.contentContainer}>
              {/* Photos in feed */ }
              <Content style={{backgroundColor: 'white', marginTop:50}}> 
            <Text style={styles.popUpTitle}>Congratulations!</Text>
            <Text style={styles.popUpDescription}>All of your photos have alt text.</Text>
              </Content>
              </View>
          {/* Navigation Bar */}
          <NavBar
            selected='feed'
            navigation={this.props.navigation}/>
        </View>
    );
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

export {PersonalFeedAlt};
