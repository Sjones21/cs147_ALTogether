import React, { Component } from "react";
/*
import {
  View,
  Text,
  StyleSheet
} from "react-native";
*/

import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { Assets, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile.js';
import ProfileAlt from './ProfileAlt.js';
import Feed from './Feed.js';
import NewPost from './NewPost.js';
import NewPostChoosePic from './NewPostChoosePic.js';
import NewPostFilter from './NewPostFilter.js';
import NewPostEdit from './NewPostEdit.js';
import NewPostCaption from './NewPostCaption.js';
import AltogetherGuided from './AltogetherGuided.js';
import AltogetherCustom from './AltogetherCustom.js';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';

import { Container } from "native-base";
import { IMAGES } from "./IMAGES";
import Activity from "./Activity";
const Stack = createStackNavigator();
const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default class App extends React.Component {

  state = {
    image_id: null,
    userNeedsOnboard: true
  };

  render() {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true
          }}>
          <Stack.Screen name="Feed" component={Feed} initialParams={{ image_id: "" }} options={({ route, navigation }) => ({ title: 'Instagram', headerShown: false })} />
          <Stack.Screen name="Profile" component={Profile} options={({ headerShown: false, animationEnabled: false })} />
          <Stack.Screen name="ProfileAlt" component={ProfileAlt} options={({ headerShown: false, animationEnabled: false })} />
          <Stack.Screen name="NewPostChoosePic" component={NewPostChoosePic} initialParams={{updateImageIdCallback: ((id) => this.setState({image_id: id}))}} options={({ route, navigation,
                  }) => ({
            title: 'New Post',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
              </HeaderBackButton>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.headerButton}
                onPress={(route) => {
                  navigation.navigate('NewPostFilter', {
                    image_id: this.state.image_id
                  });
                }}>
                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Activity" component={Activity} options={({ route, navigation,
          }) => ({
            title: 'Activity',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100, textAlign: 'left' },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
              </HeaderBackButton>
            ),
          })} />
          <Stack.Screen name="NewPostFilter" component={NewPostFilter} options={({ route, navigation }) => ({
            animationEnabled: false,
            title: 'Filter',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
                </HeaderBackButton>
              ),
              headerRight: () => (
                <TouchableOpacity style={styles.headerButton}
                onPress={() => {navigation.navigate('AltogetherGuided', {
                  image_id: this.state.image_id,
                  userNeedsOnboard: this.state.userNeedsOnboard
                });
                }}>
                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="NewPostEdit" component={NewPostEdit} options={({ route, navigation }) => ({
            animationEnabled: false,
            title: 'Edit',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
                </HeaderBackButton>
              ),
              headerRight: () => (
                <TouchableOpacity style={styles.headerButton}
                onPress={() => {navigation.navigate('AltogetherGuided', {
                  image_id: this.state.image_id,
                  userNeedsOnboard: this.state.userNeedsOnboard
                });
                }}>

                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
              )
            })} />
          <Stack.Screen name="AltogetherGuided" component={AltogetherGuided} initialParams={{userNeedsOnboardCallback: ((userNeedsOnboardAnswer) => this.setState({userNeedsOnboard: userNeedsOnboardAnswer}))}} options={({ route, navigation }) => ({
            title: 'ALTogether',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
              </HeaderBackButton>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.headerButton}
                onPress={() => {
                  navigation.navigate('NewPostCaption', {
                    image_id: this.state.image_id,
                    type: 'guided'
                  });
                }}>
                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="AltogetherCustom" component={AltogetherCustom} options={({ route, navigation }) => ({
            animationEnabled: false, title: 'ALTogether',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.navigate('NewPostFilter')}>
              </HeaderBackButton>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.headerButton}
                onPress={() => {
                  navigation.navigate('NewPostCaption', {
                    image_id: this.state.image_id,
                    type: 'custom'
                  });
                }}>
                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="NewPostCaption" component={NewPostCaption} options={({ route, navigation }) => ({
            title: 'New Post',
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { height: 100 },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                style={styles.headerButton}
                onPress={() => navigation.goBack()}>
              </HeaderBackButton>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.headerButton}
                onPress={() => {
                  IMAGES[this.state.image_id].feed = true, navigation.navigate('Feed', {
                    image_id: this.state.image_id
                  });
                }}>
                <Text style={styles.headerButtonText}>Next</Text>
              </TouchableOpacity>
            )
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
