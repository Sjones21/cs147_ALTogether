import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { GALLERY } from './GALLERY.js';
import { styles } from './Styles.js';

export default class NewPostChoosePic extends Component {
  render() {
    let images = [];

    for (const [key, value] of Object.entries(GALLERY)) {
      images.push(
        <GalleryPhoto key={`${key}`} photo={value} />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> Choose pic from camera roll</Text>
        </View>
      </View>
    );
  }
}
export {NewPostChoosePic};