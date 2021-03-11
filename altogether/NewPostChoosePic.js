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
  constructor(props) {
    super(props);
    this.state = {
      selectedImageLink: require('./assets/images/gallery/pic1.png'),
    }
    this.selectedImage = this.selectedImage.bind(this);
  }
  selectedImage(photo) {
    this.setState({ selectedImageLink: photo.link })
    //Alert.alert(`${photo.id} kissed`);
  }
  render() {
    let images = [];

    for (const [key, value] of Object.entries(GALLERY)) {
      images.push(
        <NewGalleryPhoto key={`${key}`} photo={value} isNewPhoto={true} selectedImage={this.selectedImage} />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.selectedImageContainer}>
          <Image
            style={styles.selectedGalleryPhoto}
            source={this.state.selectedImageLink}
          />
        </View>
        <View style={styles.galleryTextContainer}>
          <Text style={styles.header1}> Gallery</Text>
        </View>
        <ScrollView>
<<<<<<< HEAD
          <View>
            <View style={{ justifyContent: 'center', margin: 1 }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images}
                {/*<GalleryPhoto photo={IMAGES.iceCream} />
=======
            <View>
        <View style={{ justifyContent: 'center', margin: 1 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {images}
            {/*<GalleryPhoto photo={IMAGES.iceCream} />
>>>>>>> parent of 940c4ce (Revert "yes")
                <GalleryPhoto photo={IMAGES.sydney1} />*/}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      </ScrollView>
      </View>
    );
  }
}
export { NewPostChoosePic };