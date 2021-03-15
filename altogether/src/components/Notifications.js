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
import { styles } from '../../Styles';

import { Container, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;


export default class Notifications extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail style={{ height: 40, width: 40 }} source={this.props.thumbnail} />
                                <Body>
                                    <Text style={{ fontWeight: "900" }}>{this.props.description} </Text>
                                    <Text style={{ fontWeight: "900" }}>{this.props.ago} </Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Image source={this.props.photo.link}
                                        style={{ height: scale(40), width: scale(40) }} />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export { CardComponent };
