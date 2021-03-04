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
            {/* Profile Container */}
            <View>
              <Image source={require('./assets/images/ice_cream.png')}
                   />
             </View>
            {/* 3x3 Photos Container */}
            <View>
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
