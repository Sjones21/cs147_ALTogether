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


class ToggleProfile extends Component {

    render() {
        return (
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={[this.props.selected == 'left' ? styles.selected : styles.unselected]}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => this.props.navigation.push('Profile')}>
                <Image style={styles.icons} source={this.props.iconLeft} />
              </TouchableOpacity>
            </View>
            <View style={[this.props.selected == 'right' ? styles.selected : styles.unselected]}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.props.navigation.navigate('ProfileAlt')}>
              <Image style={styles.icons} source={this.props.iconRight} />
            </TouchableOpacity>
            </View>
          </View>
        );
    }
}

export default ToggleProfile;
