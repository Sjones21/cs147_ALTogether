import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import HeaderBar from './src/components/HeaderBar'
import NavBar from './src/components/NavBar'
import ToggleProfile from './src/components/ToggleProfile'
import GalleryPhoto from './src/components/GalleryPhoto'

//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { IMAGES } from './IMAGES.js';
import { styles } from './Styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component {
  renderProgressBarColor(numAlt, totalPosts){
    let percentAlt = numAlt/totalPosts * 100;
    if (percentAlt <= 20){
      return '#FA5858';
    }else if (percentAlt > 20 && percentAlt < 100){
      return '#FAA958';
    }else if (percentAlt === 100){
      return '#8FCB2E';
    }
  }
  render() {
    let images = [];
    let numAlt = 0;
    let totalPosts = 0;

    for (const [key, value] of Object.entries(IMAGES)) {
      if (value.poster == 'sydney'){
        if (!value.hasAltText) {
        images.push(
          <GalleryPhoto width={(windowWidth-8)/3 } navigation={this.props.navigation} nextPage={'PersonalFeedAlt'} key={`${key}`} photo={value} />
        );
        }
        if (value.hasAltText) {
        numAlt += 1;
        }
      totalPosts += 1;
    }


  }

  if (totalPosts - numAlt === 0) {
    return (
      <View style={styles.container}>
        {/* Header Bar */}
        <HeaderBar
          selected='profile'
          navigation={this.props.navigation} title='sydney_jones' />


          <View style={styles.contentContainer}>

            <View style={styles.scrollContainer}>

              {/* Profile Information */}
              <View style={styles.profileContainer}>
                {/* Profile Picture */}
                <Image source={require('./assets/images/ProfilePicture.png')} style={{ height: 105, width: 105 }} />
                <View style={{ flexDirection: 'column' }}>
                  {/* Posts, Followers, Following */}
                  <View style={styles.numbersContainer}>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>{totalPosts}</Text><Text style={styles.numberSmall}>Posts</Text></View>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>100</Text><Text style={styles.numberSmall}>Followers</Text></View>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>80</Text><Text style={styles.numberSmall}>Following</Text></View>
                  </View>
                  {/* Progress Bar */}
                  <View>
                    <View style={styles.progressBarOutline}>
                      <View style={{
                        height: 8,
                        width: numAlt / totalPosts * 235,
                        backgroundColor: this.renderProgressBarColor(numAlt, totalPosts),
                        borderRadius: 10
                      }}></View>
                    </View>
                    <Text style={styles.progressBarLabel}>{numAlt}/{totalPosts} posts have alt text</Text>
                  </View>
                </View>
              </View>

              {/* Bio Information */}
              <View style={styles.bioContainer}>
                <Text style={styles.header1}>Sydney Jones</Text>
                <Text>Hi, my name's Sydney and here are some photos from my life!</Text>
              </View>

              {/* Edit Profile Button */}
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={styles.editButton}>
                  <Text style={styles.buttonLabel}>Edit Profile</Text>
                </TouchableOpacity>
              </View>

              {/* Stories */}
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.story} source={require('./assets/images/Story1.png')} />
                <Image style={styles.story} source={require('./assets/images/Story2.png')} />
              </View>
            </View>

            {/* Toggle */}
            <ToggleProfile
              selected='right'
              iconLeft={require('./assets/images/GalleryUnselected.png')}
              iconRight={require('./assets/images/AltIconSelected.png')}
              navigation={this.props.navigation} />

            {/* 3x3 Photos Container */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 1 }}>
            <View>
            <Text style={styles.popUpTitle}>Congratulations!</Text>
            <Text style={styles.popUpDescription}>All of your photos have alt text.</Text>
            </View>
            </View>

        </View>

        {/* Navigation Bar */}
        <NavBar
          selected='profile'
          navigation={this.props.navigation} />
      </View>
    );
  }


    return (
      <View style={styles.container}>
        {/* Header Bar */}
        <HeaderBar
          selected='profile'
          navigation={this.props.navigation} title='sydney_jones' />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          <ScrollView>
            <View style={styles.scrollContainer}>

              {/* Profile Information */}
              <View style={styles.profileContainer}>
                {/* Profile Picture */}
                <Image source={require('./assets/images/ProfilePicture.png')} style={{ height: 105, width: 105 }} />
                <View style={{ flexDirection: 'column' }}>
                  {/* Posts, Followers, Following */}
                  <View style={styles.numbersContainer}>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>{totalPosts}</Text><Text style={styles.numberSmall}>Posts</Text></View>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>100</Text><Text style={styles.numberSmall}>Followers</Text></View>
                    <View style={{ flex: 1 }}><Text style={styles.numberBig}>80</Text><Text style={styles.numberSmall}>Following</Text></View>
                  </View>
                  {/* Progress Bar */}
                  <View>
                    <View style={styles.progressBarOutline}>
                      <View style={{
                        height: 8,
                        width: numAlt / totalPosts * 235,
                        backgroundColor: this.renderProgressBarColor(numAlt, totalPosts),
                        borderRadius: 10
                      }}></View>
                    </View>
                    <Text style={styles.progressBarLabel}>{numAlt}/{totalPosts} posts have alt text</Text>
                  </View>
                </View>
              </View>

              {/* Bio Information */}
              <View style={styles.bioContainer}>
                <Text style={styles.header1}>Sydney Jones</Text>
                <Text>Hi, my name's Sydney and here are some photos from my life!</Text>
              </View>

              {/* Edit Profile Button */}
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={styles.editButton}>
                  <Text style={styles.buttonLabel}>Edit Profile</Text>
                </TouchableOpacity>
              </View>

              {/* Stories */}
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.story} source={require('./assets/images/Story1.png')} />
                <Image style={styles.story} source={require('./assets/images/Story2.png')} />
              </View>
            </View>

            {/* Toggle */}
            <ToggleProfile
              selected='right'
              iconLeft={require('./assets/images/GalleryUnselected.png')}
              iconRight={require('./assets/images/AltIconSelected.png')}
              navigation={this.props.navigation} />

            {/* 3x3 Photos Container */}
            <View style={{ justifyContent: 'center', margin: 1 }}>
              <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>Posts Without Alt Text</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Navigation Bar */}
        <NavBar
          selected='profile'
          navigation={this.props.navigation} />
      </View>
    );
  }
}

export { Profile };
