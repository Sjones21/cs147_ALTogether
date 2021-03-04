import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Welcome message */}
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> <Text style={styles.underline}>New</Text> Post! <Text style={styles.underline}>This</Text>
            <Text style={styles.pageTitle}> is how you <Text style={styles.underline}>underline</Text> text</Text>
            </Text>
        </View>
      </View>
    );
  }
}
export {Profile};