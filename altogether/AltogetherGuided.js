import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import ToggleAlt from './src/components/ToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as Speech from 'expo-speech';

import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AltogetherCustom extends Component {

  constructor() {
    super();

    this.state = {
      /* Would pull alt text property from image */
      altText: 'Me holding a chocolate ice cream cone at the Santa Cruz Boardwalk on a sunny day.'
    };
  }

  speak = () => {
    Speech.speak(this.state.altText, {rate: 1.25});
  };

  handleAltText = (text) => {
    this.setState({altText: text})
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
              <Image source={require('./assets/images/ice_cream.png')}
                  style={{ height: windowWidth, width: windowWidth }} />

              {/* Toggle Profile */}
              <ToggleAlt
                selected='left'
                navigation={this.props.navigation}/>

              {/* Alt Text Writing Container */}
              <View style={styles.writingContainer}>
                <Text style={styles.header1}>Review our suggested alt text </Text>
                <Text style={styles.header2}>Correcting any errors ensures that your alt text will accurately describe your image.</Text>
                  <TextInput
                    style={[styles.textbox, {height: windowHeight / 10}]}
                    onChangeText={this.handleAltText}
                    onSubmitEditing = { () => Keyboard.dismiss()}
                    multiline={true}
                    autoFocus={true}>
                    <Text style={{color: '#666666'}}>{this.state.altText}</Text>
                  </TextInput>
                <Text style={styles.textboxInstruction}>Tap underlined words to edit.</Text>
              </View>

              {/* SUBMIT BUTTON */ }
              <View style={{ alignSelf: 'center'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={this.speak}>
                  <Image source={require('./assets/images/Play.png')}
                      style={styles.icons} />
                  <Text>Hear your alt text</Text>
                  </TouchableOpacity>

                  {/*<TouchableOpacity
                  style={styles.exampleButton}
                  onPress={() => Alert.alert('Submitted alt text')}>
                  <Text style={styles.exampleButtonLabel}>Submit</Text>
                </TouchableOpacity>*/}
              </View>

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export {AltogetherCustom};
