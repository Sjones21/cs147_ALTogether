import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

import { IMAGES } from "./IMAGES";
import { TabRouter } from '@react-navigation/routers';

import GalleryPhoto from './src/components/GalleryPhoto'

export default class NewPostChoosePic extends Component {

  constructor({route}) {
    super();
        this.state =  {
          imageID: IMAGES.iceCream.id,
          updateImageIdCallback: route.params.updateImageIdCallback
    };
    console.log("Constructor CHOOSEPIC " + this.state.imageID);
  }

  handleImagePress = (id) =>{
    this.setState({imageID: id}, () => {
    this.state.updateImageIdCallback(this.state.imageID);
    console.log("CHOOSEPIC " + this.state.imageID);
    })
  }

  render() {
    let images = [];
    for (const [key, value] of Object.entries(IMAGES)) {
      images.push(
        <TouchableOpacity key={`${key}`} photo={value}
            onPress={() => this.handleImagePress(value.id)}>
            <Image style={styles.galleryPhoto} source={value.link} />
          </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', margin: 1}}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                { images }
              </View>
            </View>
      </View>
    );
  }
}
export {NewPostChoosePic};