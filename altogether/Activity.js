import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'

//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { NOTIFICATIONS } from './NOTIFICATIONS.js';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import Notifications from './src/components/Notifications';



//import { Constants } from 'expo';

const { width } = Dimensions.get('window');

let customFonts = {
  //'AriataDisplay-Regular': require('./assets/fonts/AriataDisplay-Regular.otf'),
  //'PFDin-Regular6': require('./assets/fonts/PFDin-Regular6.ttf'),
  // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};



export default class Activity extends Component {


  constructor({ route, navigation }) {
    super();
    /*
    const image = NOTIFICATIONS[route.params.image_id];
        this.state =  {
          selectedImage: image,
          ImageID: route.params.image_id
    };*/
  }

  render() {

    let nudges = [];
    let recentNotifications = [];
    let pastNotifications = [];

    for (const [key, value] of Object.entries(NOTIFICATIONS)) {
      let likes = Math.floor(Math.random() * Math.floor(300));
      let comments = Math.floor(Math.random() * Math.floor(25));
      /*
      id: 'haeliNudge1',
      nudge: true,
      follow: false,
      user: 'haeli',
      description: ' encourages you to add alt text to your photo!',
      ago: "1d",
      link: require('./assets/images/feed/sydney1.png'),
      thumbnail: require('./assets/images/feed/haeliProf.png')
      */
      if (value.nudge === true) {
        nudges.push(
          <Notifications key={`${key}`} thumbnail={`${value.thumbnail}`} link={`${value.link}`} user={`${value.user}`} notification={value} description={`${value.description}`} ago={`${value.ago}`} follow={`${value.follow}`}/>
        );
      }

      if (value.nudge === false) {
        if (value.recent === true) {
          recentNotifications.push(
            <Notifications key={`${key}`} thumbnail={`${value.thumbnail}`} link={`${value.link}`} user={`${value.user}`} notification={value} description={`${value.description}`} ago={`${value.ago}`} follow={`${value.follow}`} />
          );
        } else if (value.recent === false) {
          pastNotifications.push(
            <Notifications key={`${key}`} thumbnail={`${value.thumbnail}`} link={`${value.link}`} user={`${value.user}`} notification={value} description={`${value.description}`} ago={`${value.ago}`} follow={`${value.follow}`} />
          );
        }
      }
    }

    return (

      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>

            {/* Feed Container */}

            <View style={styles.contentContainer}>
              <Content style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                <Text style={{ fontWeight: "900", marginLeft: 10, marginTop: 10, marginBottom: 10 }}>Follow Requests</Text>
              </Content>
              <Content style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                <Text style={{ fontWeight: "900", marginLeft: 10, marginTop: 10 }}>Nudges</Text>
                {nudges}
              </Content>
              <Content style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                <Text style={{ fontWeight: "900", marginLeft: 10, marginTop: 10 }}>This Week</Text>
                {recentNotifications}
              </Content>
              <Content style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                <Text style={{ fontWeight: "900", marginLeft: 10, marginTop: 10 }}>This Month</Text>
                {pastNotifications}
              </Content>
            </View>
          </ScrollView>
        </SafeAreaView>
        {/* Navigation Bar */}
        <NavBar
          selected='feed'
          navigation={this.props.navigation} />
      </View>

    );
  }
}

export { Activity };
