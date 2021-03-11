import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import NewGalleryPhoto from './src/components/NewGalleryPhoto'
import ToggleFilter from './src/components/ToggleFilter'

import { IMAGES } from "./IMAGES";
import { GALLERY } from './GALLERY.js';
import { styles } from './Styles.js';

export default class NewPostEdit extends Component {
  constructor({route, navigation}) {
    super();
        this.state =  {
          imageID: route.params.image_id,
          selectedImage: IMAGES[route.params.image_id]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedImageContainer}>
          <Image
            style={styles.selectedGalleryPhoto}
            source={this.state.selectedImage.link}
          />
        </View>
        <View style={styles.horizontalScroll}>
          <ScrollView horizontal={true}>
              <View style={{ justifyContent: 'center', margin: 1 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <Image style={styles.galleryPhoto} source={this.state.selectedImage.link} />
                  <Image style={styles.galleryPhoto} source={this.state.selectedImage.link} />
                  <Image style={styles.galleryPhoto} source={this.state.selectedImage.link} />
                </View>
              </View>
          </ScrollView>
        </View>
        <View style={styles.editToggle}>
          <ToggleFilter
            selected='right'
            iconLeft={require('./assets/images/GallerySelected.png')}
            iconRight={require('./assets/images/AltIconUnselected.png')}
            navigation={this.props.navigation} 
            image_id ={this.state.selectedImage.id}/>
        </View>
      </View>
    );
  }
}
export { NewPostEdit };