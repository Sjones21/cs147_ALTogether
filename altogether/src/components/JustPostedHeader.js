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
            <CardItem style={{ margin: -5 }}>
                <Left style={{ minWidth: 200 }}>
                    <Thumbnail style={{ height: 30, width: 30 }} source={this.props.thumbnail} />
                    <Body>
                      <Text style={{ fontWeight: "700" }}> Just posted a photo with alt text! </Text>
                    </Body>
                </Left>
                <Right>
                  <View>
                    <Image
                    source = {require('../../assets/images/checkmark.png')}
                    style = {styles.icons}/>
                  </View>
                </Right>
            </CardItem>
        </Card>
    );
  }
}

export default JustPostedHeader;
