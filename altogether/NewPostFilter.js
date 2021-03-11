/*
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
import {
  AdenCompat,
  BrannanCompat,
  BrooklynCompat,
  ClarendonCompat,
  EarlybirdCompat,
  GinghamCompat,
  HudsonCompat,
  ToasterCompat,
} from 'react-native-image-filter-kit'


export default class NewPostFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: '',
    }
    this.selectedImage = this.selectedImage.bind(this);
  }
  applyFilters(imageLink) {

    filteredImages = [];
    let images = [];

    let imageTemplate = (
      <Image
        style={styles.newGalleryPhoto}
        source={imageLink}
      />
    );

    filteredImages.push(<AdenCompat image={imageTemplate} />);
    filteredImages.push(<BrannanCompat image={imageTemplate} />);
    filteredImages.push(<BrooklynCompat image={imageTemplate} />);
    filteredImages.push(<ClarendonCompat image={imageTemplate} />);
    filteredImages.push(<EarlybirdCompat image={imageTemplate} />);
    filteredImages.push(<GinghamCompat image={imageTemplate} />);
    filteredImages.push(<HudsonCompat image={imageTemplate} />);
    filteredImages.push(<ToasterCompat image={imageTemplate} />);

    for (let i = 0; i < filteredImages.length; i++) {
      images.push(
        <TouchableOpacity
          onPress={() => this.setState({ selectedImageIndex: i })}>
          {filteredImages[i]}
        </TouchableOpacity>
      );
    }
    return images;
  }

    render() {
      let image = require('./assets/images/gallery/pic1.png');
      let filteredImages = applyFilters(image);

      return (
        <View style={styles.container}>
          <View style={styles.selectedImageContainer}>
            {filteredImages[this.state.selectedImageIndex]}
            <Image
              style={styles.selectedGalleryPhoto}
            //source={this.state.selectedImageLink}
            />
          </View>
          <View style={styles.galleryTextContainer}>
            <Text style={styles.header1}> Gallery</Text>
          </View>
          <ScrollView horizontal={true}>
            <View>
              <View style={{ justifyContent: 'center', margin: 1 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {filteredImages}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
export { NewPostFilter };
*/

import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

export default class NewPostFilter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> Start a new post</Text>
        </View>
      </View>
    );
  }
}
export {NewPostFilter};