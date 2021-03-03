import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Platform,
    Linking
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;


class CardComponent extends Component {

    render() {
        return (
            <Card style={styles.container}>
                <CardItem>
                    <Left>
                        <Thumbnail source="./assets/me.jpg" />
                        <Body>
                            <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                            <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    WebViewContainer: {
    marginTop: (Platform.OS == 'android') ? 20 : 0,
  }
});