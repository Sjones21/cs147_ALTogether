import React, {Component } from 'react';
import { Alert, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { Container, Content } from 'native-base'
import CardComponent from './src/components/CardComponent'
import NewPostToggleAlt from './src/components/NewPostToggleAlt'
//import { Audio } from ''
import { Card, ListItem, Button} from 'react-native-elements'
import * as Speech from 'expo-speech';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import { styles } from './Styles.js';
import { IMAGES } from './IMAGES.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class NewPostAltogetherGuided extends Component {

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
                  console.log(index);
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
    const image = IMAGES[route.params.image_id];
    const userNeedsOnboard = route.params.userNeedsOnboard;
    console.log('user needs onboard: ', userNeedsOnboard);
    this.state =  {
      image: image,
      altTextDisplay: this.underlineAltText(image.autogenerated),
      isSpeaking: false,
      isModalVisible: userNeedsOnboard,
      isInfoModalVisible: false,
      isLastSlideOfModal:false,
      userNeedsOnboardCallback: route.params.userNeedsOnboardCallback
    };
    this.setInitialDisplay(this.state.image.autogenerated);
    this.state.userNeedsOnboardCallback(false);
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

  toggleOnboardModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }
  toggleInfoModal = () => {
    this.setState({isInfoModalVisible: !this.state.isInfoModalVisible});
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
    console.log("got 002 here")
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
    //console.log(this.state.image.altText)
    this.setState({altTextDisplay: this.underlineAltText(elements)});
  }

  renderOnboardPagination = (index, total, context) => {
    return (
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
        {index == total -1? (<TouchableOpacity
                        style = {{width:200, backgroundColor: '#3996EF', borderRadius: 10, marginBottom:20, alignSelf:'center'}}
                        onPress={this.toggleOnboardModal}
                        isVisible='false'
                      ><Text style={{color:'white', fontSize: 20, fontWeight:'500', textAlign: 'center', padding:10}}>Begin</Text></TouchableOpacity>
                    ):(<View style={{height:40}}/>)}
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {index == 0? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 1? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 2? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        </View>

      </View>
    )
  }

  renderInfoPagination = (index, total, context) => {
    return (
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
        {index == total -1? (<TouchableOpacity
                        style = {{width:200, backgroundColor: '#3996EF', borderRadius: 10, marginBottom:20, alignSelf:'center'}}
                        onPress={this.toggleInfoModal}
                        isVisible='false'
                      ><Text style={{color:'white', fontSize: 20, fontWeight:'500', textAlign: 'center', padding:10}}>OK</Text></TouchableOpacity>
                    ):(<View style={{height:40}}/>)}
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {index == 0? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 1? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 2? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 3? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        {index == 4? <View style={styles.activeDot}/>: <View style={styles.dot}/>}
        </View>
      </View>
    )
  }








  render() {
    return (
      <View style={styles.guidedCustomContainer}>
        {/**ONBOARD MODAL */}
        <Modal isVisible={this.state.isModalVisible} animationIn='slideInRight' style={[styles.slide1, {backgroundColor: '#FAFAFA', margin:20, marginTop:130, marginBottom:130, borderRadius:20}]}>
                  <View  style={{flex: 1}}>
                  <Icon
                        raised
                        name='close'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 32, margin:15, alignSelf:'flex-end'}}
                        onPress={this.toggleOnboardModal}
                      ></Icon>
                    <Swiper  style={styles.wrapper} height={200} renderPagination={this.renderOnboardPagination}>

                      <View style={styles.slide1}>
                      <Text style={[styles.modalHeaderText, {textAlign:'center', fontSize: 40,fontWeight:'700',paddingTop:0}]}>
                          Welcome{'\n'}
                          <Text style={[styles.modalSubHeaderText, {paddingRight:30, paddingLeft:30,}]}>
                          to ALTogether</Text>
                        </Text>
                        <Image style={{width:306, height:459, marginTop:30}}source = {require('./assets/images/onboard-image1.png')}/>
                      </View>

                      <View style={styles.slide1}>
                      <Text style={[styles.modalHeaderText, {textAlign:'center', fontSize: 40,fontWeight:'700',paddingTop:3, paddingBottom:0, marginBottom:0}]}>
                          What we do
                          </Text>
                        <Image style={{width:306, height:459, marginTop:20}}source = {require('./assets/images/onboard-image2.png')}/>
                      </View>

                      <View style={styles.slide1}>
                          <Text style={[styles.modalHeaderText, {fontSize: 40,fontWeight:'700',paddingTop:10, paddingBottom:0}]}>
                          Join us</Text>
                          <Text style={[styles.modalHeaderText, {textAlign:'center', fontWeight:'300', fontSize: 22, paddingTop:15, paddingBottom:10, padding:30}]}>
                          in increasing visually impaired access by helping to:</Text>
                       <View style={{flexDirection:'row', flexWrap:'wrap', paddingLeft:50, paddingRight:50,}}>
                        <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22,marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', marginTop:30, lineHeight:28, color:'black'}}>
                      <Text style={{fontWeight:'500'}}>Identify </Text>
                       important people, places, and things in your photo
                       </Text>
                       <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22,marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', lineHeight:28, color:'black', marginTop:30, marginRight:20}}>
                      <Text style={{fontWeight:'500'}}>Describe </Text>
                       your photo's setting and context
                       </Text>
                      <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22, marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', lineHeight:28, color:'black', marginTop:30}}>
                      <Text style={{fontWeight:'500'}}>Limit </Text>
                      the alt text to 1-2 sentences</Text>
                      </View>
                      </View>
                    </Swiper>
                    <View style={{height:40}}/>
                  </View>
                </Modal>
          {/**INFO MODAL */}
                <Modal isVisible={this.state.isInfoModalVisible} animationIn='slideInRight' style={[styles.slide1, {backgroundColor: '#FAFAFA', margin:20, marginTop:130, marginBottom:130, borderRadius:20}]}>
                  <View  style={{flex: 1}}>
                  <Icon raised  name='close' type='material' color='#3996EF' style = {{fontSize: 32, margin:15, alignSelf:'flex-end'}} onPress={this.toggleInfoModal} />
                    <Swiper  style={styles.wrapper} height={200} renderPagination={this.renderInfoPagination}>

                    <View style={styles.slide1}>
                        <Text style={[styles.modalSubHeaderText, {padding:50, paddingTop:10, paddingBottom:50}]}>
                        <Text style={[styles.modalHeaderText, {fontSize: 40,fontWeight:'700',paddingTop:0}]}>
                          Alt Text{'\n'}</Text>
                          <Text style={[styles.modalSubHeaderText, {paddingTop:0, padding:30}]}>
                          describes your photo for the blind and visually-impaired</Text>
                        </Text>
                        <Image style={{height:250, width:250}} source= {require('./assets/images/onboard1.png')}></Image>
                        <Text style={{fontSize: 20, fontWeight:'400', paddingTop:10, paddingLeft:50, paddingRight:50, fontWeight:'300', textAlign:"center"}}>"Palm trees on a Maui beach during a vibrant sunset"</Text>
                      </View>

                      <View style={styles.slide1}>
                      <Text style={[styles.modalHeaderText, {textAlign:'center', fontSize: 36,fontWeight:'700', paddingTop:20}]}>
                      <Text style={[styles.modalSubHeaderText, {textAlign:'center', fontWeight:'300', fontSize: 22, marginTop:20, padding:30, paddingTop:0}]}>
                          What makes good alt text? {'\n'}</Text>
                          Key Details
                        </Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:30, paddingBottom:20}}>
                        <Icon raised name='close' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>

                      <Text style={styles.exampleTextStrikethrough}> "The Grand Canyon" </Text>
                      </View>
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15}}source = {require('./assets/images/example2.png')}/>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:10, paddingBottom:0}}>
                        <Icon raised name='check' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>
                      <Text style={styles.exampleText}>"The Grand Canyon at </Text>
                      </View>
                      <Text style={[styles.exampleText, {padding:50, paddingTop:0, paddingBottom:20}]}>
                      sunset, with warm red walls and a river flowing through the middle"
                       </Text>
                      </View>

                      <View style={styles.slide1}>
                      <Text style={[styles.modalHeaderText, {textAlign:'center', fontSize: 36,fontWeight:'700', paddingTop:20}]}>
                      <Text style={[styles.modalSubHeaderText, {textAlign:'center', fontWeight:'300', fontSize: 22, marginTop:20, padding:30, paddingTop:0}]}>
                          What makes good alt text? {'\n'}</Text>
                          Focus
                        </Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:20, paddingBottom:0}}>
                        <Icon raised name='close' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>
                      <Text style={styles.exampleTextStrikethrough}>"This is a photo of</Text>
                      <Text style={styles.exampleText}> me at </Text>
                      </View>
                        <Text style={[styles.exampleText, {padding:50, paddingTop:0, paddingBottom:20,}]}>the Eiffel Tower <Text style={styles.exampleTextStrikethrough}>with a white bus in the background"</Text></Text>
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15, marginLeft: 7}}source = {require('./assets/images/example1.png')}/>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:10, paddingBottom:0}}>
                        <Icon raised name='check' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>
                      <Text style={styles.exampleText}>"Me riding a bike in front   </Text>
                      </View>
                      <Text style={[styles.exampleText, {padding:50, paddingTop:0, paddingBottom:20}]}>
                      of the Eiffel Tower"
                       </Text>
                      </View>



                      <View style={styles.slide1}>
                      <Text style={[styles.modalHeaderText, {textAlign:'center', fontSize: 36,fontWeight:'700', paddingTop:20}]}>
                      <Text style={[styles.modalSubHeaderText, {textAlign:'center', fontWeight:'300', fontSize: 22, marginTop:20, padding:30, paddingTop:0}]}>
                          What makes good alt text? {'\n'}</Text>
                          Personal Context
                        </Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:20, paddingBottom:0}}>
                        <Icon raised name='close' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>
                      <Text style={styles.exampleTextStrikethrough}>"Two girls</Text>
                      <Text style={styles.exampleText}> running at </Text>
                      </View>
                        <Text style={[styles.exampleText, {padding:50, paddingTop:0, paddingBottom:20,}]}><Text style={styles.exampleTextStrikethrough}>a beach"</Text></Text>
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15}}source = {require('./assets/images/example3.png')}/>
                        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:50, paddingTop:10, paddingBottom:0}}>
                        <Icon raised name='check' type='material' color='#3996EF' style = {{fontSize: 22,marginTop:2, marginRight:5}}/>
                      <Text style={styles.exampleText}> "Me and my best friend </Text>
                      </View>
                      <Text style={[styles.exampleText, {padding:50, paddingTop:0, paddingBottom:20}]}>
                        Mia holding hands while running into the ocean in Fiji”
                       </Text>
                      </View>
                      <View style={styles.slide1}>
                          <Text style={[styles.modalHeaderText, {fontSize: 40,fontWeight:'700',paddingTop:30, paddingBottom:30}]}>
                          Remember To</Text>
                       <View style={{flexDirection:'row', flexWrap:'wrap', paddingLeft:50, paddingRight:50,}}>
                        <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22,marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', marginTop:30, lineHeight:28, color:'black'}}>
                      <Text style={{fontWeight:'500'}}>Identify </Text>
                       important people, places, and things in your photo
                       </Text>
                       <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22,marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', lineHeight:28, color:'black', marginTop:30, marginRight:20}}>
                      <Text style={{fontWeight:'500'}}>Describe </Text>
                       your photo's setting and context
                       </Text>
                      <Icon
                        raised
                        name='check'
                        type='material'
                        color='#3996EF'
                        style = {{fontSize: 22, marginTop:34, marginRight:10}}
                      ></Icon>
                      <Text style={{fontSize: 22, fontWeight:'300', lineHeight:28, color:'black', marginTop:30}}>
                      <Text style={{fontWeight:'500'}}>Limit </Text>
                      the alt text to 1-2 sentences</Text>
                      </View>
                      </View>

                    </Swiper>
                    <View style={{height:40}}/>
                  </View>
                </Modal>

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
              <NewPostToggleAlt
                selected='left'
                navigation={this.props.navigation}
                image_id ={this.state.image.id}
                />

              {/* Alt Text Writing Container */}
              <View style={[styles.writingContainer]}>
                <View  style= {{flexDirection:'row'}}><Text style={styles.header1}>Review our suggested alt text </Text>
                <Icon
                raised
                name='info'
                type='material'
                color='#3996EF'
                style = {{fontSize: 22, marginTop:2, marginLeft: 25}}
                onPress={this.toggleInfoModal}
                ></Icon>
                </View>
                <Text style={styles.header2}>Tap any word to edit:</Text>
                  <TextInput
                    style={styles.textbox}
                    onChangeText={this.handleAltText}
                    onSubmitEditing = { () => Keyboard.dismiss()}
                    multiline={true}
                    autoFocus={true}>
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
export {NewPostAltogetherGuided};
