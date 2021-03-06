import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import ToggleAlt from './src/components/ToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AltogetherCustom extends Component {

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
                selected='right'
                navigation={this.props.navigation}/>

              {/* Alt Text Writing Container */}
              <View style={styles.writingContainer}>
                <Text style={styles.header1}>Create a custom alt text</Text>
                <Text style={styles.header2}>Writing your own alt text delivers context only you can provide.</Text>
                <TextInput
                    style={[styles.textbox, {height: windowHeight / 10}]}
                    placeholder={'E.g., "My black pug Ellie lying in the backyard grass with her tongue sticking out."'}
                    placeholderTextColor = {'#666666'}
                    multiline={true}
                    onSubmitEditing = { () => Keyboard.dismiss()}
                  />
              </View>

              {/* SUBMIT BUTTON */}
              {/*<View style={{ alignSelf: 'center'}}>
                <TouchableOpacity
                  style={styles.exampleButton}
                  onPress={() => Alert.alert('Submitted alt text')}>
                  <Text style={styles.exampleButtonLabel}>Submit</Text>
                </TouchableOpacity>
              </View>*/}

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export {AltogetherCustom};
