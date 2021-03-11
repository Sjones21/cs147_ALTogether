import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NewGalleryPhoto from './src/components/NewGalleryPhoto'

import { GALLERY } from './GALLERY.js';
import { styles } from './Styles.js';

export default class NewPostChoosePic extends Component {
  selectedImage(){

  }
  render() {
    let images = [];

    for (const [key, value] of Object.entries(GALLERY)) {
      images.push(
        <NewGalleryPhoto key={`${key}`} photo={value} isNewPhoto={true} />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> Choose pic from camera roll</Text>
        </View>
        <View style={styles.titleContainer}>
          <Image
            //style={styles.tinyLogo}
            //source=
          />
        </View>
        <View style={{ justifyContent: 'center', margin: 1 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {images}
            {/*<GalleryPhoto photo={IMAGES.iceCream} />
                <GalleryPhoto photo={IMAGES.sydney1} />*/}
          </View>
        </View>
      </View>
    );
  }
}
export { NewPostChoosePic };