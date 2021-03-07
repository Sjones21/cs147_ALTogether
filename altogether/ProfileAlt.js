import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'
import ToggleProfile from './src/components/ToggleProfile'
import GalleryPhoto from './src/components/GalleryPhoto'

//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header Bar */}
        <HeaderBar
          selected='profile'
          navigation={this.props.navigation} title='sydney_jones'/>

        {/* Content Container */}
        <View style={styles.contentContainer}>
          <ScrollView>
            <View style={styles.scrollContainer}>

              {/* Profile Information */}
              <View style={styles.profileContainer}>
                {/* Profile Picture */}
                <Image source={require('./assets/images/ProfilePicture.png')} style={{height: 105, width: 105}}/>
                <View style={{flexDirection: 'column'}}>
                  {/* Posts, Followers, Following */}
                  <View style={styles.numbersContainer}>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>6</Text><Text style={styles.numberSmall}>Posts</Text></View>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>100</Text><Text style={styles.numberSmall}>Followers</Text></View>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>80</Text><Text style={styles.numberSmall}>Following</Text></View>
                  </View>
                  {/* Progress Bar */}
                  <View>
                    <View style={styles.progressBarOutline}><View style={styles.progressBarFill}></View></View>
                    <Text style={styles.progressBarLabel}>5/6 posts have alt text</Text>
                  </View>
                </View>
              </View>

              {/* Bio Information */}
              <View style={styles.bioContainer}>
                <Text style={styles.header1}>Sydney Jones</Text>
                <Text>Hi, my name's Sydney and here are some photos from my life!</Text>
              </View>

              {/* Edit Profile Button */}
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.editButton}>
                  <Text style={styles.buttonLabel}>Edit Profile</Text>
                </TouchableOpacity>
              </View>

              {/* Stories */}
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.story} source={require('./assets/images/Story1.png')}/>
                <Image style={styles.story} source={require('./assets/images/Story2.png')}/>
              </View>
            </View>

            {/* Toggle */}
            <ToggleProfile
              selected='right'
              iconLeft={require('./assets/images/GalleryUnselected.png')}
              iconRight={require('./assets/images/AltIconSelected.png')}
              navigation={this.props.navigation}/>

            {/* 3x3 Photos Container */}
            <View style={{justifyContent: 'center', margin: 1}}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <GalleryPhoto photo={require("./assets/images/ice_cream.png")} />
                <GalleryPhoto photo={require("./assets/images/ice_cream.png")} />
                <GalleryPhoto photo={require("./assets/me.jpg")} />
                <GalleryPhoto photo={require("./assets/me.jpg")} />
                <GalleryPhoto photo={require("./assets/me.jpg")} />
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Navigation Bar */}
        <NavBar
          selected='profile'
          navigation={this.props.navigation}/>
      </View>
    );
  }
}

export {Profile};
