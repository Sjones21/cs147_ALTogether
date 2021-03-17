import React, { Component } from "react";
import {
    Alert,
    Image,
    Linking,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView,
} from "react-native";
import { styles } from '../../Styles';

import { Container, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;


class HeaderBar extends Component {

    render() {
        return (
          <View style={styles.headerBar}>
            <View>
              <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
            <View style={styles.barIcons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NewPostChoosePic')}>
                <Image
                  source = {require('../../assets/images/Post.png')}
                  style = {styles.icons}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Activity')}>
                <Image
                  source = {require('../../assets/images/Heart.png')}
                  style = {styles.icons}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert('Direct Messages')}>
                <Image
                  source = {require('../../assets/images/Mail.png')}
                  style = {styles.icons}/>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },

  exampleButton: {
    padding: 10,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  headerBar: {
    height: 90,
    padding: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA'
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  barIcons: {
    flexDirection: 'row'
  },

  icons: {
    height: 25,
    width: 25,
    margin: 5
  },

  scrollContainer: {
  flexGrow: 1,
  margin: 20,
},

  navBar: {
    height: 100,
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FAFAFA'
  }
});*/
export default HeaderBar;
