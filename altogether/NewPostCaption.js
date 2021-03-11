import React, { Component } from 'react';
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content, Switch} from 'native-base'
import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';

import { IMAGES } from './IMAGES.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class NewPostCaption extends Component {

  

  constructor({route, navigation}) {
    super();
    const image = IMAGES[route.params.image_id];
        this.state =  {
          selectedImage: image,
          altTextType: route.params.type,
          FBIsEnabled: true,
          TwitterIsEnabled: false,
          TumblrIsEnabled: false,
    };
    console.log(this.state.selectedImage.custom)
  }

  parseAltText(autoStr){
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
    return(<Text>{elements}</Text>);
  }

  toggleFBSwitch = () => {
    let previousState = this.state.FBIsEnabled;
    this.setState({FBIsEnabled: !previousState});
  }

  toggleTwitterSwitch = () => {
    let previousState = this.state.TwitterIsEnabled;
    this.setState({TwitterIsEnabled: !previousState});
  }

  toggleTumblrSwitch = () => {
    let previousState = this.state.TumblrIsEnabled;
    this.setState({TumblrIsEnabled: !previousState});
  }

  handleChangeText = (text) => {
    this.state.selectedImage.caption = text;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', margin: 1 }}>
              <View style={{flexDirection: 'row', flexWrap: "nowrap", justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Image style={[styles.galleryPhoto, {margin:15, marginTop:20}]} source={this.state.selectedImage.link} />
             
              <TextInput
                       style={[styles.captionText, {height: windowHeight / 8}]}
                       placeholder={'Write a caption...'}
                       placeholderTextColor={'#666666'}
                       onChangeText={this.handleChangeText}
                       multiline={true}
                       onSubmitEditing = { () => Keyboard.dismiss()}>
                </TextInput>
              </View>
              <Text style={styles.captionAltText}>Alt text: {(this.state.altTextType == 'guided' || this.state.selectedImage.custom == null) ? this.parseAltText(this.state.selectedImage.autogenerated) : this.state.selectedImage.custom}</Text>
            </View>
            <Image style={{width: windowWidth, height: windowHeight/4}}source={require('./assets/images/caption_details.png')}></Image>
            <View style={{flexDirection: 'row', flexWrap: "nowrap", justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Text style={[styles.captionText, {fontWeight: '400', fontSize: 20, marginLeft: 14, marginTop: 22}]}>Facebook</Text>
              <Switch style={{marginRight: 20, marginTop: 20}}
                trackColor={{false: "#424242", true: '#3996EF'}}
                thumbColor={this.state.isEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#424242"
                onValueChange={this.toggleFBSwitch}
                value={this.state.FBIsEnabled}/>
              </View>
              <View style={{flexDirection: 'row', flexWrap: "nowrap", justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Text style={[styles.captionText, {fontWeight: '400', fontSize: 20, marginLeft: 14, marginTop: 20}]}>Twitter</Text>
              <Switch style={{marginRight: 20, marginTop: 18}}
                trackColor={{false: "#424242", true: '#3996EF'}}
                thumbColor={this.state.isEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#424242"
                onValueChange={this.toggleTwitterSwitch}
                value={this.state.TwitterIsEnabled}/>
              </View>
              <View style={{flexDirection: 'row', flexWrap: "nowrap", justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Text style={[styles.captionText, {fontWeight: '400', fontSize: 20, marginLeft: 14, marginTop: 20}]}>Tumblr</Text>
              <Switch style={{marginRight: 20, marginTop: 18}}
                trackColor={{false: "#424242", true: '#3996EF'}}
                thumbColor={this.state.isEnabled ? "#ffffff" : "#ffffff"}
                ios_backgroundColor="#424242"
                onValueChange={this.toggleTumblrSwitch}
                value={this.state.TumblrIsEnabled}/>
              </View>
      </View>
    );
  }
}
export {NewPostCaption};
