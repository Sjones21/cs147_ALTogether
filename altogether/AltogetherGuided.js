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

export default class AltogetherGuided extends Component {

    underlineAltText(autoStr){
        const words = autoStr.split(' ');
        const numWords = words.length;
        let count = 1;
        const elements = [];
        words.map(word => {
            if(word.startsWith("##")){
                word = word.substr(2);
                if(count == numWords){
                    elements.push((
                    <Text key ={word.id} style = {styles.underline}>{word}</Text>
                    ));
                } else {
                elements.push((
                    <Text style={{flex: 2}}><Text key ={word.id} style = {styles.underline}>{word}</Text><Text> </Text></Text>
                    ));
                }
                count++;
            } else {
                if(count == numWords){
                    elements.push((
                    <Text key ={word.id} style = {styles.inputText}>{word}</Text>
                    ));
                } else {
                elements.push((
                    <Text key ={word.id} style = {styles.inputText}>{word} </Text>
                    ));
                }
                count++;
            }
        });
        return(<Text style={{flexDirection: 'row'}}>{elements}</Text>);

      }

  constructor() {
    IMAGES.iceCream.altText = IMAGES.iceCream.autogenerated;
    super();

    this.state = {
      /* Would pull alt text property from image */
      //altTextDisplay: `${IMAGES.iceCream.autogenerated}`
      altTextDisplay: this.underlineAltText(IMAGES.iceCream.autogenerated)
    };
  }

  speak = () => {
    Speech.speak(IMAGES.iceCream.altText, {rate: 1.25});
  };

  

  handleAltText = (text) => {
    const words = text.split(' ');
    const numWords = words.length;
    let count = 1;
    let elements = "";
    words.map(word => {
        if(IMAGES.iceCream.autogenerated.includes(("##" + word))){
            if(count == numWords){
                elements += ("##" + word);
            } else {
            elements += ("##" + word + " ");
            }
            count++;
        } else {
            if(count == numWords){
                elements += (word);
            } else {
                elements += (word + " ");
            }
            count++;
        }
    });

    IMAGES.iceCream.altText = elements;
    this.setState({altTextDisplay: this.underlineAltText(elements)});
  }

  render() {
    return (
      <View style={styles.guidedCustomContainer}>
        <KeyboardAvoidingView
          style={{flex: 1, alignItems: 'center'}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={(windowHeight/20)}>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{justifyContent: 'flex-end'}}>
              {/* Image Post */}
              <Image source={IMAGES.iceCream.link}
                  style={{height: windowHeight/2.5, width: windowWidth}} />

              {/* Toggle Profile */}
              <ToggleAlt
                selected='left'
                navigation={this.props.navigation}/>

              {/* Alt Text Writing Container */}
              <View style={styles.writingContainer}>
                <Text style={styles.header1}>Review our suggested alt text </Text>
                <Text style={styles.header2}>Edit to add context and correct errors</Text>
                  <TextInput
                    style={styles.textbox}
                    onChangeText={this.handleAltText}
                    onSubmitEditing = { () => Keyboard.dismiss()}
                    multiline={true}
                    autoFocus={true}>
                    <Text>{this.state.altTextDisplay}</Text>
                  </TextInput>
                  <Text style={styles.textboxInstruction}>Tap any word to edit</Text>
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
export {AltogetherGuided};
