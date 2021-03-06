import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*marginTop: 20,*/
    backgroundColor: '#fff',
  },

  guidedCustomContainer: {
    flex: 1,
    height: 600,
    /*marginTop: 20,*/
    backgroundColor: '#fff',
  },

  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white'
  },

  scrollContainer: {
    padding: 20,
    backgroundColor: '#fff',

  },

  exampleButton: {
    padding: 10,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  exampleButtonLabel: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },

  hidden: {
    display: 'none'
  },

  selected: {
    padding: 10,
    flexGrow: 1,
    borderBottomWidth: 2,
    borderColor: 'black'
  },

  unselected: {
    padding: 10,
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: '#B1A9A9'
  },

  selectedText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold'
  },

  unselectedText: {
    fontSize: 22,
    color: '#B1A9A9',
    fontWeight: 'bold'
  },

  /* TYPOGRAPHY */

  header1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  header2: {
    fontSize: 18,
    fontWeight: '300',
    color: "#424242",
    marginBottom: 15,
  },

  /* HEADER BAR, NAV BAR */
  headerBar: {
    height: 100,
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

  navBar: {
    height: 100,
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FAFAFA'
  },

  /* ICONS */
  barIcons: {
    flexDirection: 'row'
  },

  icons: {
    height: 25,
    width: 25,
    margin: 5
  },



  /* CARD COMPONENT */

  cardContainer: {
    marginTop: 30
  },
  cardItem: {
    color: 'rgb(300,0,333)',
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0, //default is 1
    shadowRadius: 0,//default is 1
  },


  /* PROFILE */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  numberBig: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  numberSmall: {
    textAlign: 'center',
    fontSize: 14
  },

  progressBarOutline: {
    height: 10,
    width: 235,
    marginTop: 15,
    marginBottom: 5,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10
  },

  progressBarFill: {
    height: 8,
    width: 200,
    backgroundColor: '#FAA958',
    borderRadius: 10
  },

  progressBarLabel: {
    textAlign: 'center',
    color: '#666666'
  },

  bioContainer: {
    marginTop: 10,
    marginBottom: 10
  },

  editButton: {
    width: 360,
    height: 30,
    margin: 10,
    padding: 5,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#B1A9A9',
    borderRadius: 5
  },
  dot:{
  backgroundColor: "rgba(0,0,0,.2)",
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
  },

  activeDot:{
    backgroundColor: '#3996EF',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
    },

  headerButton: {
    padding: 10,
    paddingTop: 3,
    paddingBottom:5,
    margin: 5,
    marginRight:10,
    color: '#3996EF',
    borderRadius: 10,
  },

  headerButtonText: {
    fontSize: 20,
    color: '#3996EF',
    fontWeight: '500',
  },

  pageTitle:{
    fontSize: 20,
  },

  underlineWrapper:{
      borderBottomWidth: 10
  },

  inputText: {
    fontSize: 22,
    fontWeight: '300',
  },

  captionText:{
    fontSize: 18,
    fontWeight: '300',
    flexBasis: 250,
    flexShrink: 2,
    flexGrow: 2,
    margin:15,
    marginLeft:0,
    marginTop:30,
    flexWrap: 'wrap'
  },

  captionAltText:{
    fontSize: 16,
    fontWeight: '300',
    margin: 15,
    marginTop: 0,
    color: '#666666'
  },

  underline: {
    fontFamily: 'Arial',
    fontSize: 22,
    fontWeight: '400',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: '#3996EF',
    color: '#3996EF'
  },

  cardContainer: {
    marginTop: 30
  },

  buttonLabel: {
    fontWeight: 'bold',
    textAlign: 'center'
  },

  switch:{
    margin: 15
  },

  story: {
    height: 70,
    width: 70,
    margin: 10,
    resizeMode: 'contain'
  },

  /* GALLERY */

  galleryPhoto: {
    height: 140,
    width: 140,
    margin: 1
  },
  /* NEW POST CHOOSE PIC */
  selectedImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedGalleryPhoto: {
    height: 400,
    width: 400,
  },

  newGalleryPhoto: {
    height: 100,
    width: 100,
    margin: 1
  },
  galleryTextContainer: {
    margin: 10,
    justifyContent: 'center',
  },
  /* NEW POST FILTER */
  horizontalScroll: {
    marginTop: 140,
  },
  editToggle: {
    marginTop: 80,

  },
  /* ALT TEXT WRITING */
  writingContainer: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  textbox: {
    minHeight: 100,
    maxHeight:200,
    marginTop: 5,
    padding: 20,
    paddingTop:15,
    paddingLeft:15,
    backgroundColor: '#ebf1f5',
    color: '#424242',
    borderRadius: 5,
    fontSize: 22,
    fontWeight: '300'
  },

  textboxInstruction: {
    marginTop: 5,
    alignSelf: 'center',
    color: '#B1A9A9',
  },

  /*Swiper */
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },

  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',

  },

  closeButton:{
    fontSize: 32,
    marginTop:15,
    marginRight: 15,
    alignSelf:'flex-end'},

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  modalHeaderText: {
    color: '#000',
    fontSize: 26,
    fontWeight:'600'
  },

  modalSubHeaderText:{
    textAlign:'center',
    fontWeight:'300',
    fontSize: 22,
  },

  exampleTextStrikethrough:{
    textDecorationLine: "line-through",
    fontSize: 20,
    fontWeight:'300',
    lineHeight:23,
    color:'grey',
    textAlign:'center'
  },

  exampleText:{
    fontSize: 20,
    fontWeight:'300',
    lineHeight:23,
    color:'#000000',
    textAlign:'center'
  },



  image: {
  },

/* ALT icons */

  imageIcon: {
    width: 40,
    height: 40,
  },

/* Pop Ups */

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  popUpContainer: {
    margin: 0,
    padding: 30,
    paddingTop: 15,
    paddingBottom: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
  },

  popUpHeader: {
    margin: 10,
    marginTop: 0,
    paddingBottom: 15,
    marginRight: 0,
    marginLeft: 0,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB'
  },

  popUpTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  popUpDescription: {
    fontSize: 18,
    textAlign: 'center',
  },

  popUpButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  popUpButtonLabel: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },





});

export {styles}
