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
import { styles } from '../../Styles';

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
            onPress={() => Alert.alert('icon pressed')}>
            <Image style={styles.galleryPhoto} source={this.props.photo} />
          </TouchableOpacity>

        );
    }
}

export default GalleryPhoto;
