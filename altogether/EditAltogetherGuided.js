import React, {Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import EditToggleAlt from './src/components/EditToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button} from 'react-native-elements'
import * as Speech from 'expo-speech';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';
import InfoButtonModal from './src/components/InfoButtonModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class EditAltogetherGuided extends Component {

    underlineAltText(autoStr){
        const words = autoStr.split(' ');
        const numWords = words.length;
        let count = 1;
        const elements = [];
        words.map(function(word, index) {
            if(word.startsWith("##")){
                word = word.substr(2);
                if(count == numWords){
                    elements.push((
                    <Text key ={index} style = {styles.underline}>{word}</Text>
                    ));
                } else {
                elements.push((
                    <Text Text key ={index}><Text style = {styles.underline}>{word}</Text><Text> </Text></Text>
                    ));
                }
                count++;
            } else {
                if(count == numWords){
                    elements.push((
                    <Text key ={index} style = {styles.inputText}>{word}</Text>
                    ));
                } else {
                elements.push((

                    <Text key ={index} style = {styles.inputText}>{word} </Text>
                    ));
                }
                count++;
            }
        });
        return(<Text style={{flexDirection: 'row'}}>{elements}</Text>);
      }

  constructor({route, navigation}) {
    super();
    //console.log(route.params.image_id);
    //console.log(navigation.setOptions);
    const image = IMAGES[route.params.image_id];
    this.state =  {
      image: image,
      altTextDisplay: this.underlineAltText(image.autogenerated),
      isSpeaking: false,
      isLastSlideOfModal:false,
    };
    this.setInitialDisplay(this.state.image.autogenerated);
  }

  speak = () => {
    // LEFT OFF THERE
    this.setState({isSpeaking: true});
    Speech.speak(this.state.image.autogenerated, {rate: 1.25, onDone: this.onDone});
    // console.log(this.state.image.altText)
    // console.log(this.state.altTextDisplay)
  };

  stop = () => {
    Speech.stop();
    this.setState({isSpeaking: false});
  }

  onDone = () => {
    this.setState({isSpeaking: false})
  }



  setInitialDisplay = (text) => {
    const words = text.split(' ');
    const numWords = words.length;
    let count = 1;
    let elements = "";
    words.map(word => {
        if(this.state.image.autogenerated.includes(("##" + word))){
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

    this.state.image.autogenerated = elements;
    //console.log("got 002 here")
  }

  updateAltText(elements) {
    /* Update alt text of images with the parsed alt text */
    let altText = '';
    for (let word of elements) {
      altText += word;
    }
    this.state.image.altText = altText;
    console.log(altText)
  }

  parseAltText = (autoStr) => {
    const words = autoStr.split(' ');
    const numWords = words.length;
    let count = 1;
    const elements = [];
    words.map(word => {
        if(word.startsWith("##")){
            word = word.substr(2);
        }
            if(count == numWords){
                elements.push((word));
            } else {
            elements.push((word + ' '));
            }
            count++;
    });

    this.updateAltText(elements);

  }

  handleAltText = (text) => {
    const words = text.split(' ');
    const numWords = words.length;
    let count = 1;
    let elements = "";
    words.map(word => {
        if(this.state.image.autogenerated.includes(("##" + word))){
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

    // this.state.image.altText = elements;
    this.state.image.autogenerated = elements;
    //console.log(elements)
    this.parseAltText(elements)
    this.state.image.hasAltText = true;

    //console.log(this.state.image.altText)
    this.setState({altTextDisplay: this.underlineAltText(elements)});
    //console.log(this.state.image)
  }








  render() {
    return (
      <View style={styles.guidedCustomContainer}>

        <KeyboardAvoidingView
          style={{flex: 1, alignItems: 'center',}}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={(windowHeight/20)}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{justifyContent: 'flex-end'}}>
              {/* Image Post */}
              <Image source={this.state.image.link}
                  style={{height: windowHeight/2.5, width: windowWidth}} />
              {/* Toggle Profile */}
              <EditToggleAlt
                selected='left'
                navigation={this.props.navigation}
                image_id ={this.state.image.id}
                />

              {/* Alt Text Writing Container */}
              <View style={[styles.writingContainer]}>
                <View  style= {{flexDirection:'row'}}><Text style={styles.header1}>Review our suggested alt text </Text>
                {/**INFO MODAL */}
                <View style={{ marginTop:2, marginLeft: 25}}>
                  <InfoButtonModal ></InfoButtonModal>
                </View>
                </View>
                <Text style={styles.header2}>Tap any word to edit:</Text>
                  <TextInput
                    style={styles.textbox}
                    onChangeText={this.handleAltText}
                    onSubmitEditing = { () => Keyboard.dismiss()}
                    multiline={true}
                    autoFocus= {(this.state.isModalVisible)?  false: true}
                    >
                    <Text>{this.state.altTextDisplay}</Text>
                  </TextInput>
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
export {EditAltogetherGuided};
