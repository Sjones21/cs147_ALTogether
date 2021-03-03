import React, { Component } from "react";
/*
import {
  View,
  Text,
  StyleSheet
} from "react-native";
*/
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from 'expo'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { ScrollView } from "react-native-gesture-handler";

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
export default class App extends React.Component {

  /*
  async componentDidMount() {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true
    })
    this.setState({ loaded: true })
  }*/


  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent thumbnail={require("./assets/me.jpg")} youtube={true} id_youtube="L-W_EDUQw6I" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} youtube={true} id_youtube="507d9xto6Og" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} twitch_live={true} chaine_twitch="humilityfr" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} twitch_videos={true} id_twitch_video="329825601" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} twitch_clips={true} id_twitch_clip="LongDrabPelicanCurseLit" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} twitch_collections={true} id_twitch_video="329031576" id_twitch_collection="y9LXlzpDYhU6yw" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} instagram={true} id_instagram_post="Bpmrcm7HgQW" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} spotify_album={true} id_spotify="1zNr37qd3iZJ899byrTkcj" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} spotify_playlist={true} id_user="2c8a6esgmr19imm8bl14570vk" id_spotify="2280Pf3U69Rp6CdVpxzSNr" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} spotify_song={true} id_spotify="4GXl8l1MfZPf2GvpyRPJBf" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
          <CardComponent thumbnail={require("./assets/me.jpg")} pinterest={true} id_pinterest="801781539887841710" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="blablablabla" />
        </Content>
      </Container>
    )
  }
}