import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'

//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import JustPostedHeader from './src/components/JustPostedHeader';



//import { Constants } from 'expo';

const { width } = Dimensions.get('window');

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
          justPosted: false
    };
  }

  render() {

    let images = [];
    for (const [key, value] of Object.entries(IMAGES)) {
      let likes = Math.floor(Math.random() * Math.floor(300));
      let comments = Math.floor(Math.random() * Math.floor(25));
      if (value.feed === true) {
        images.push(
          <CardComponent key={`${key}`} thumbnail={`${value.thumbnail}`} photo={value} likes={`${likes}`} nb_commentaires={`${comments}`} pseudo={`${value.poster}`} date="01/01/2018" description= {`${value.caption}`}/>
        );
      }
    }

      return(
          <View style={styles.container}>
            {/* Header Bar */}
            <HeaderBar navigation = {this.props.navigation} title='Instagram'/>
            {/* HARDCODED SOLUTION */}
            {images.length >2?(<JustPostedHeader/>):null}
            {/* Feed Container */}
            <View style={styles.contentContainer}>
                <Content>
                  {images}
                </Content>
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
