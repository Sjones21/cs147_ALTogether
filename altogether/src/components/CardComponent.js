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


class CardComponent extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail style={{ height: 40, width: 40 }} source={this.props.thumbnail} />
                                <Body>
                                    <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem >
                            <Image source={require('../../assets/images/ice_cream.png')}
                                style={{ height: scale(320), width: scale(320) }} />
                        </CardItem>

                        <CardItem style={{ height: 30 }}>
                            <Left>
                                <Button transparent>
                                    <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                                </Button>
                                <Button transparent>
                                    <Icon name="ios-chatbubble-outline" style={{ color: 'black' }} />
                                </Button>
                                <Button transparent>
                                    <Icon name="ios-paper-plane-outline" style={{ color: 'black' }} />
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem style={{ height: 30 }} >
                            <Left>
                                <Button transparent>
                                    <Text style={{ fontWeight: "900" }}>{this.props.likes} likes </Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem style={{ height: 20 }}>
                            <Left>
                                <Button transparent>
                                    <Text>
                                        <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                                        {this.props.description}
                                    </Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem style={{ height: 30 }}>
                            <Left>
                                <Button transparent>
                                    <Text style={{ color: 'gray' }}>
                                        View all {this.props.nb_commentaires} comments
                                </Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{ color: 'gray' }}>{this.props.date}</Text>
                            </Left>
                        </CardItem>

                    </Card>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default CardComponent;