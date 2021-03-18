import React, { Component } from "react";
import {
  Alert,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from "react-native";
import { styles } from '../../Styles.js';
import { IMAGES } from '../../IMAGES.js';


import { Container, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;


class GalleryPhoto extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.nextPage,  {index: this.props.index})}>
        {/*// onPress={() => this.props.navigation.navigate('PersonalFeed')}>*/}
        {this.props.isNewPhoto ?
          <Image style={styles.newGalleryPhoto} source={this.props.photo.link} />
          :
          <Image style={[styles.galleryPhoto, {height: this.props.width, width: this.props.width}]} source={this.props.photo.link} />}
      </TouchableOpacity>

    );
  }
}

export default GalleryPhoto;
