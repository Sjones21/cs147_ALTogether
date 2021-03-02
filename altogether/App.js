import { StatusBar } from 'expo-status-bar';
//import React from 'react';
/*
import {
  Alert,
  Button,
  AppRegistry,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
*/
import { styles } from './Styles.js';

import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'


export default function App() {
  const DATA = [
    {
      id: 1,
      postTitle: 'Planet of Nature',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      id: 2,
      postTitle: 'Lampost',
      avatarURI:
        'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      imageURI:
        'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      randomText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  ]

  return (
    <List
      style={this.props.themedStyle.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={DATA.id}
    />
  );
}
