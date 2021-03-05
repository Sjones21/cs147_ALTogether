import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

export default class AlthogetherGuided extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}> Guided alt prompt screen</Text>
        </View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.exampleButton} navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('AltogetherCustom')}><Text style={styles.pageTitle}> Custom</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
export {AlthogetherGuided};