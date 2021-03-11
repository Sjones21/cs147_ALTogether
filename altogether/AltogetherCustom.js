import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import ToggleAlt from './src/components/ToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { IMAGES } from './IMAGES.js';
import { styles } from './Styles.js';
import * as Speech from 'expo-speech';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AltogetherCustom extends Component {

  speak = () => {
    Speech.speak(this.state.image.altText, {rate: 1.25});
  };

  handleAltText = (text) => {
    this.state.image.altText = text;
  }

constructor({route, navigation}) {
  super();
  const image = IMAGES[route.params.image_id];
      this.state =  {
        image: image,
  };
}

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={(windowHeight / 20)}>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{justifyContent: 'flex-end'}}>
              {/* Image Post */}
              <Image source={this.state.image.link}
                  style={{ height: windowHeight/2.5, width: windowWidth }} />

              {/* Toggle Profile */}
              <ToggleAlt
                selected='right'
                navigation={this.props.navigation}
                image_id ={this.state.image.id}
                />

              {/* Alt Text Writing Container */}
              <View style={styles.writingContainer}>
                <Text style={styles.header1}>Custom alt text </Text>
                <Text style={styles.header2}>Write your own alt text:</Text>
                  <TextInput
                     style={[styles.textbox, {height: windowHeight / 8}]}
                     placeholder={'E.g., "My black pug Ellie lying in the backyard grass with her tongue sticking out."'}
                     placeholderTextColor={'#AAAAAA'}
                     onChangeText={this.handleAltText}
                     multiline={true}
                     onSubmitEditing = { () => Keyboard.dismiss()}>
                  </TextInput>
                  <Text> </Text>
                  <View style ={{flexDirection: 'row', alignItems: 'center', alignSelf:'center'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', marginTop: 35}}
                  onPress={this.speak}>
                  <Image source={require('./assets/images/Play.png')}
                      style={[styles.icons, {height: 20, width: 20, marginLeft: 0, marginRight: 10, tintColor: '#3996EF'}]} />
                  <Text style={{fontSize: 18, color: '#424242', fontWeight: '300'}}>Hear your alt text</Text>
                  </TouchableOpacity>
                  </View>
              </View>

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export {AltogetherCustom};
