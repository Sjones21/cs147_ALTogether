import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import EditToggleAlt from './src/components/EditToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button,} from 'react-native-elements'

import { IMAGES } from './IMAGES.js';
import { styles } from './Styles.js';
import * as Speech from 'expo-speech';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import InfoButtonModal from './src/components/InfoButtonModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class EditAltogetherCustom extends Component {

  speak = () => {
    this.setState({isSpeaking: true});
    Speech.speak(this.state.image.custom, {rate: 1.25, onDone: this.onDone});
  };


  stop = () => {
    Speech.stop();
    this.setState({isSpeaking: false});
  }

  onDone = () => {
    this.setState({isSpeaking: false})
  }

  handleAltText = (text) => {
    this.state.image.altText= text;
    this.state.image.custom = text;
    this.state.image.hasAltText = true;
    //console.log(this.state.image.id, " ", this.state.image.altText);
  }



constructor({route, navigation}) {
  super();
  const image = IMAGES[route.params.image_id];
      this.state =  {
        image: image,
        isSpeaking: false,
  };
}


  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{flex: 1,  backgroundColor:"white"}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={(windowHeight / 20)}>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{justifyContent: 'flex-end'}}>
              {/* Image Post */}
              <Image source={this.state.image.link}
                  style={{ height: windowHeight/2.5, width: windowWidth }} />

              {/* Toggle Profile */}
              <EditToggleAlt
                selected='right'
                navigation={this.props.navigation}
                image_id ={this.state.image.id}
                />

              {/* Alt Text Writing Container */}
              <View style={styles.writingContainer}>
              <View  style= {{flexDirection:'row'}}><Text style={styles.header1}>Custom alt text</Text>
                {/**INFO MODAL */}
                <View style={{ marginTop:2, marginLeft: 25}}>
                  <InfoButtonModal ></InfoButtonModal>
                </View>
                </View>
                <Text style={styles.header2}>Write your own alt text</Text>
                  {this.state.image.custom == null ?
                    (<TextInput
                       style={[styles.textbox, {height: windowHeight / 8}]}
                       placeholder={'E.g., "My black pug Ellie lying in the backyard grass with her tongue sticking out."'}
                       placeholderTextColor={'#AAAAAA'}
                       onChangeText={this.handleAltText}
                       multiline={true}
                       onSubmitEditing = { () => Keyboard.dismiss()}>
                    </TextInput>) :
                    (<TextInput
                       style={[styles.textbox, {height: windowHeight / 8}]}
                       onChangeText={this.handleAltText}
                       multiline={true}
                       onSubmitEditing = { () => Keyboard.dismiss()}>
                       <Text>{this.state.image.custom}</Text>
                    </TextInput>)
                  }
                  <View style ={{flexDirection: 'row', alignItems: 'center', alignSelf:'center'}}>
                  { this.state.isSpeaking ? (<TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center', marginTop: 35}}
                    onPress={this.stop}>
                    <Image source={require('./assets/images/Pause.png')}
                        style={[styles.icons, {height: 20, width: 20, marginLeft: 0, marginRight: 10, tintColor: '#3996EF'}]} />
                    <Text style={{fontSize: 18, color: '#424242', fontWeight: '300'}}>Pause your alt text</Text>
                    </TouchableOpacity>) :
                    (<TouchableOpacity
                      style={{flexDirection: 'row', alignItems: 'center', marginTop: 35}}
                      onPress={this.speak}>
                      <Image source={require('./assets/images/Play.png')}
                          style={[styles.icons, {height: 20, width: 20, marginLeft: 0, marginRight: 10, tintColor: '#3996EF'}]} />
                      <Text style={{fontSize: 18, color: '#424242', fontWeight: '300'}}>Hear your alt text</Text>
                      </TouchableOpacity>)
                  }
                  </View>
              </View>

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export {EditAltogetherCustom};
