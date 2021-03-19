import React, { Component } from "react";
import {
    Image,
    Linking,
    Platform,
    StyleSheet,
    Text,
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

class JustPostedHeader extends Component {

  render() {
    return (
        <Card transparent>
            <CardItem style={{ margin: -5, backgroundColor: "#FAFAFA"}}>
                <Left style={{ minWidth: 200 }}>
                      <Text style={{ marginTop:5, marginLeft:15, fontWeight: "500" }}> Just posted your photo with alt text!</Text>
                </Left>
                <Right>
                  <View>
                  <Image
                    source = {require('../../assets/images/checkmark.png')}
                    style = {[styles.icons, {marginRight:10, marginBottom:5}]}/>
                  </View>
                </Right>
            </CardItem>
        </Card>
    );
  }
}

export default JustPostedHeader;
