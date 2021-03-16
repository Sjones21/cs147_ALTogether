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
            //<SafeAreaView style={styles.container}>
            //    <ScrollView style={styles.scrollView}>
            <Card transparent>
                <CardItem style={{ margin: -5 }}>
                    <Left style={{ minWidth: 200 }}>
                        <Thumbnail style={{ height: 30, width: 30 }} source={this.props.thumbnail} />
                        <Body>
                            <Text>
                                <Text style={{ fontWeight: "700" }}>{this.props.user} </Text>
                                <Text>{this.props.description} </Text>
                                <Text style={{ color: "gray" }}>{this.props.ago} </Text>
                            </Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button transparent>
                            {this.props.follow === true ?
                                <Image source={this.props.link}
                                    style={{ height: scale(40), width: scale(70), resizeMode: 'contain' }} />
                            :
                                <Image source={this.props.link}
                                    style={{ height: scale(30), width: scale(30) }} />
                            }
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            //    </ScrollView>
            //    </SafeAreaView>
        );
    }
}
export { Notifications };
