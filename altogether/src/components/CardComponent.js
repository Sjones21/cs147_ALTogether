import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Platform,
    Linking,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { styles } from '../../Styles';
import * as Animatable from 'react-native-animatable';

import { Container, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;


export default class CardComponent extends Component {

  onIcon = (event) => {
    this.props.onModal(this.props.photo);
    event.preventDefault();
  }
  /*for reference
    animations = [
    ['bounce'],
    ['flash'],
    ['jello'],
    ['pulse'],
    ['rotate'],
    ['rubberBand'],
    ['shake'],
    ['swing'],
    ['tada']
  ];
  */

  renderAltIcon() {
    var animation = 'pulse';
      return (
        <TouchableOpacity onPress={this.onIcon}>
        <Animatable.View 
        style={{flexDirection: 'row'}}
        ref={animation}
        animation={animation} 
        iterationCount={"infinite"}>
        <View style={{marginTop:8,height:25, width:90, marginRight:5}}><Text style={{fontWeight:'600', fontSize:16,color:'white', textShadowColor:'black', textShadowRadius:2, textShadowOffset:{width:1,height:1}, textAlign:'center', paddingTop:3}}>view alt text</Text></View>
        {this.props.photo.hasAltText? 
            <Image
            source={require('../../assets/images/AltWithIcon.png')}
            style={styles.imageIcon}/>
            : <Image
            source={require('../../assets/images/AltNoIcon.png')}
            style={styles.imageIcon}/>}
        </Animatable.View>
     </TouchableOpacity>
      );
  }

  

  

    render() {
       
        return (
            <SafeAreaView>
                <ScrollView>
                    <Card style={{borderColor: 'white'}}>
                        <CardItem>
                            <Left>
                                <Thumbnail style={{ height: 40, width: 40 }} source={this.props.thumbnail} />
                                <Body>
                                    <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem >
                            <ImageBackground source={this.props.photo.link}
                                style={{ height: scale(320), width: scale(320), padding: 15, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                {this.renderAltIcon()}
                            </ImageBackground>
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
export {CardComponent};
