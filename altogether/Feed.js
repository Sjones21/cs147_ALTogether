import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'

//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';
import { TextInput } from 'react-native-gesture-handler';



//import { Constants } from 'expo';

const { width } = Dimensions.get('window');

let customFonts = {
  //'AriataDisplay-Regular': require('./assets/fonts/AriataDisplay-Regular.otf'),
  //'PFDin-Regular6': require('./assets/fonts/PFDin-Regular6.ttf'),
  // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};


export default class Feed extends Component {



  render() {

    let images = [];


    for (const [key, value] of Object.entries(IMAGES)) {
      let likes = Math.floor(Math.random() * Math.floor(300));
      let comments = Math.floor(Math.random() * Math.floor(25));
      if (value.poster !== 'sydney') {
        images.push(
          <CardComponent key={`${key}`} thumbnail={`${value.thumbnail}`} photo={value} likes={`${likes}`} nb_commentaires={`${comments}`} pseudo={`${value.poster}`} date="01/01/2018" description= {`${value.caption}`}/>
        );
      }
    }

      return(
          <View style={styles.container}>
            {/* Header Bar */}
            <HeaderBar navigation = {this.props.navigation} title='Instagram'/>

            {/* Feed Container */}
            <View style={styles.contentContainer}>
                <Content>
                  {images}
                  {/*<CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.haeli1} youtube={true} id_youtube="L-W_EDUQw6I" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description= "blalala"/>
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.dani1} youtube={true} id_youtube="507d9xto6Og" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} twitch_live={true} chaine_twitch="humilityfr" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} twitch_videos={true} id_twitch_video="329825601" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} twitch_clips={true} id_twitch_clip="LongDrabPelicanCurseLit" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} twitch_collections={true} id_twitch_video="329031576" id_twitch_collection="y9LXlzpDYhU6yw" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} instagram={true} id_instagram_post="Bpmrcm7HgQW" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} spotify_album={true} id_spotify="1zNr37qd3iZJ899byrTkcj" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} spotify_playlist={true} id_user="2c8a6esgmr19imm8bl14570vk" id_spotify="2280Pf3U69Rp6CdVpxzSNr" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} spotify_song={true} id_spotify="4GXl8l1MfZPf2GvpyRPJBf" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  <CardComponent thumbnail={require("./assets/me.jpg")} photo={IMAGES.iceCream} pinterest={true} id_pinterest="801781539887841710" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
                  */}
                </Content>
              </View>
          {/* Navigation Bar */}
          <NavBar
            selected='feed'
            navigation={this.props.navigation}/>
        </View>
      );
    }
}

export {Feed};
