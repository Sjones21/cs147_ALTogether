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

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header Bar */}
        <HeaderBar navigation={this.props.navigation}/>

        {/* Profile Container */}
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollContainer}>

            <View style={{padding: 20}}>
              {/* Profile Information */}
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                {/* Profile Picture */}
                <Image source={require('./assets/images/ProfilePicture.png')} style={{height: 105, width: 105}}/>
                <View style={{flexDirection: 'column'}}>
                  {/* Posts, Followers, Following */}
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>6</Text><Text style={styles.numberSmall}>Posts</Text></View>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>100</Text><Text style={styles.numberSmall}>Followers</Text></View>
                    <View style={{flex: 1}}><Text style={styles.numberBig}>80</Text><Text style={styles.numberSmall}>Following</Text></View>
                  </View>
                  {/* Progress Bar */}
                  <Image source={require('./assets/images/ProgressBefore.png')} style={{marginTop: 10, resizeMode: 'contain', height: 10, width: 235}}/>
                  <Text style={{color: '#666666', textAlign: 'center'}}>5/6 posts have alt text</Text>
                </View>
              </View>

              {/* Bio Information */}
              <View>
                <Text style={styles.header1}>Sydney Jones</Text>
                <Text>Hi, my name's Sydney and here are some photos from my life!</Text>
                <TouchableOpacity
                  style={{borderColor: 'black', borderWidth: 1}}
                  onPress={() => Alert.alert('edit profile pressed')}>
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
              </View>

              {/* Stories */}
              <View style={{flexDirection: 'row'}}>
                <Image source={require('./assets/images/Story1.png')} style={{resizeMode: 'contain', height: 70, width: 70}}/>
                <Image source={require('./assets/images/Story2.png')} style={{resizeMode: 'contain', height: 70, width: 70}}/>
              </View>

              {/* Toggle */}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    source = {require('./assets/images/Gallery.png')}
                    style = {styles.icons}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    source = {require('./assets/images/Tagged.png')}
                    style = {styles.icons}/>
                </TouchableOpacity>
              </View>
            </View>
            {/* 3x3 Photos Container */}
            <View>
              {/* Row 1 */}
              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 1}}>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
              </View>
              {/* Row 2 */}
              <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 1}}>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Alert.alert('icon pressed')}>
                  <Image
                    style={styles.gridImage}
                    source = {require('./assets/images/ice_cream.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Navigation Bar */}
        <NavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}

export {Profile};
