import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import { CardComponent } from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NewGalleryPhoto from './src/components/NewGalleryPhoto'

import { GALLERY } from './GALLERY.js';
import { styles } from './Styles.js';

import { IMAGES } from "./IMAGES";
import { TabRouter } from '@react-navigation/routers';

import GalleryPhoto from './src/components/GalleryPhoto'

export default class NewPostChoosePic extends Component {

  constructor({route}) {
    super();
        this.state =  {
          selectedImage: IMAGES[IMAGES.iceCream.id],
          imageID: IMAGES.iceCream.id,
          updateImageIdCallback: route.params.updateImageIdCallback
    };
    this.selectedImage = this.selectedImage.bind(this);
    this.state.updateImageIdCallback(this.state.imageID);
  }



  selectedImage(photo) {
    this.setState({selectedImage : photo}, () => {
    this.setState({imageID: photo.id}, () => {
      this.state.updateImageIdCallback(this.state.imageID);
        })
      })
    //Alert.alert(`${photo.id} kissed`);
  }
  render() {
    let images = [];
    for (const [key, value] of Object.entries(IMAGES)) {
      if (value.poster == 'gallery') {
        images.push(
          <NewGalleryPhoto key={`${key}`} photo={value} isNewPhoto={true} selectedImage={this.selectedImage}/>
        );
      }
      
    }
    /*
    this.props.navigation.navigate('NewPostFilter', {
      selectedImage: this.state.selectedImage });*/
    return (
      <View style={styles.container}>
        <View style={styles.selectedImageContainer}>
          <Image
            style={styles.selectedGalleryPhoto}
            source={this.state.selectedImage.link}
          />
        </View>
        <View style={styles.galleryTextContainer}>
          <Text style={styles.header1}> Gallery</Text>
        </View>
        <ScrollView>
          <View>
            <View style={{ justifyContent: 'center', margin: 1 }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export { NewPostChoosePic };
