import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Modal} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'

import Icon from 'react-native-vector-icons/MaterialIcons';

//import { Audio } from ''
import { Card, ListItem, Button,} from 'react-native-elements'
import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import JustPostedHeader from './src/components/JustPostedHeader';
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



export default class Feed extends Component {


  constructor({route, navigation}) {
    super();
    const image = IMAGES[route.params.image_id];
    this.state =  {
      selectedImage: image,
      ImageID: route.params.image_id,
      isModalVisible: false,
      isNudgeVisible: false,
      currentPhoto: IMAGES.dani1,
      flagged: false,
      userHasViewedAltText: false,
    };

    this.handleModal = this.handleModal.bind(this)
    this.handleFlag = this.handleFlag.bind(this)

  }


handleModal = (photo) => {
  this.setState({
    isModalVisible: true,
    currentPhoto: photo,
  })
}

handleFlag(event) {
  this.setState({
    flagged: !this.state.flagged
  })
  event.preventDefault();
}


renderModal = () => {
  let photo = this.state.currentPhoto;

  /* NUDGE CONFIRMATION */
  if (this.state.isNudgeVisible || photo.nudged) {
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

          <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <Image style={{height: 75, width: 75}}source={require('./assets/images/Check.png')}/>

            <View style={{flexDirection:'column', justifyContent: 'center',alignItems: 'center', marginBottom: 10}}>
              <Text style={[styles.popUpDescription, {fontWeight: 'bold', marginBottom: 5}]}>Thank you!</Text>
              <Text style={styles.popUpDescription}>Let's keep promoting accessibility together!</Text>

            </View>
          </View>

        </View>
      </View>

    );
  }

  /* ASK TO NUDGE */
  if (!photo.hasAltText && photo.poster !== 'sydney') {
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
            <Text style={[styles.popUpDescription, {fontWeight: 'bold', marginBottom: 5}]}>@{photo.poster} did not write alt text!</Text>
            <Text style={styles.popUpDescription}>Would you like to encourage them to make their post more accessible?</Text>
          </View>
          </View>

            <TouchableOpacity
              style={[styles.popUpButton, {width: 200, alignSelf: 'center'}]}
              onPress={() => {
                photo.nudged = true,
                this.setState({ isNudgeVisible: true})}
              }>
              <Text style={styles.popUpButtonLabel}>Nudge</Text>
            </TouchableOpacity>

        </View>
      </View>

    );
  }

  /* SHOW ALT TEXT */
  return (

    <View style={styles.modalContainer}>
      <View style={[styles.popUpContainer, {height: windowHeight * .25, width: windowWidth}]}>

        <View style={styles.popUpHeader}>
        <View style={{height: 5, width: 40, backgroundColor: '#DBDBDB', borderRadius: 20, marginBottom: 15}}></View>
        <Text style={[styles.popUpTitle, {marginBottom: 0}]}>
          Alt text
        </Text>
        <View style={{marginTop:2, position: 'absolute', top: 20, right: 20}}>
          <View style={{flexDirection: 'row'}}>
          <InfoButtonModal ></InfoButtonModal>
          <Icon
            raised
            name='flag'
            type='material'
            color= {this.state.flagged? '#fa7e02' : '#3996EF'}
            style = {{fontSize: 22, marginLeft:10}}
            onPress={(event) => this.handleFlag(event)}>
          </Icon>
          </View>
        </View>
        </View>

        <View style={{flex: 1, justifyContent: 'space-around'}}>

        <View style={{flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.popUpDescription}>{this.state.currentPhoto.altText}</Text>
        </View>
        </View>

      </View>
    </View>


  );
}


renderCards(){
  let images = [];
  for (const [key, value] of Object.entries(IMAGES)) {
    if (value.feed === true) {
      images.push(
        <CardComponent
          key={`${key + this.state.userHasViewedAltText}`}
          thumbnail={`${value.thumbnail}`}
          photo={value}
          likes={`${value.likes}`}
          nb_commentaires={`${value.comments}`}
          pseudo={`${value.poster}`}
          date="01/01/2018"
          description= {`${value.caption}`}
          handleAltTextViewCallback =  {(() => {this.setState({userHasViewedAltText: true});}) }
          userHasViewedAltText = {`${this.state.userHasViewedAltText}`}
          onModal={(photo) => this.handleModal(photo)}/>
      );
    }
  }
  // Sort images by date in feed
  images.sort(function(a, b) {
    return b.props.photo.datePosted - a.props.photo.datePosted;
  });

  return images;
}

  render() {
      let images = this.renderCards();
      return(
          <View
            style={styles.container}>
            {/* Header Bar */}
            <HeaderBar navigation = {this.props.navigation} title='Instagram'/>
            {/* HARDCODED SOLUTION */}
            {images.length > 6 ?(<JustPostedHeader/>):null}
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
                    onPressOut={() => {
                      this.setState({
                        isModalVisible: false,
                        isNudgeVisible: false,
                      })
                    }}>

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

export {Feed};
