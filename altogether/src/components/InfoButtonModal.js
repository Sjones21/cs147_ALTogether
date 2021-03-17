import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Platform,
    Linking,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { styles } from '../../Styles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import Swiper from 'react-native-swiper'

import { Container, Card, CardItem, Thumbnail, Body, Left, Right, Button,} from 'native-base';

import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


export default class InfoButtonModal extends Component {

    constructor({route, navigation}) {
        super();
        this.state =  {
          isInfoModalVisible: false,
        };
      }

      toggleInfoModal = () => {
          console.log("togleInfoModal")
        this.setState({isInfoModalVisible: !this.state.isInfoModalVisible});
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
            <View>
            <Icon
                raised
                name='info'
                type='material'
                color='#3996EF'
                style = {{fontSize: 22}}
                onPress={this.toggleInfoModal}
            ></Icon>
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
                        <Image style={{height:250, width:250}} source= {require('../../assets/images/onboard1.png')}></Image>
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
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15}}source = {require('../../assets/images/example2.png')}/>
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
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15, marginLeft: 7}}source = {require('../../assets/images/example1.png')}/>
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
                        <Image style={{width:230, height:230, marginTop:5, marginBottom:15}}source = {require('../../assets/images/example3.png')}/>
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
                </View>
        );
    }
}
export {InfoButtonModal};
