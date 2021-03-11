import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

export default class NewPostFilter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Add filter screen</Text>
        </View>
      </View>
    );
  }
}
export {NewPostFilter};