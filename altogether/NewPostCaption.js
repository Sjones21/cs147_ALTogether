import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

import { IMAGES } from './IMAGES.js';
export default class NewPostCaption extends Component {

  constructor({route, navigation}) {
    super();
    const image = IMAGES[route.params.image_id];
        this.state =  {
          selectedImage: image,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> Caption screen</Text>
          <Image style={styles.galleryPhoto} source={this.state.selectedImage.link} />
          <Text style={styles.pageTitle}>Caption: {this.state.selectedImage.caption}</Text>
          <Text style={styles.pageTitle}>{'\n'}Alt text: {this.state.selectedImage.altText}</Text>
        </View>
      </View>
    );
  }
}
export {NewPostCaption};