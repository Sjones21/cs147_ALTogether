import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*marginTop: 20,*/
    backgroundColor: '#fff',
  },

  contentContainer: {
    flexGrow: 1,
    flexShrink: 1
  },

  scrollContainer: {
    padding: 20
  },

  exampleButton: {
    padding: 10,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  exampleButtonLabel: {
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  header2: {
    fontSize: 16,
    marginBottom: 5
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

  /* PROFILE */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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

  headerButton: {
    padding: 10,
    paddingTop: 3,
    paddingBottom:5,
    margin: 5,
    marginRight:10,
    backgroundColor: '#FFFFFF',
    color: '#3996EF',
    borderRadius: 10,
  },

  headerButtonText: {
    fontSize: 18,
    color: '#3996EF',
  },

  pageTitle:{
    fontSize: 20,
  },

  underline: {
    //fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: '#206FE9',
  },

  cardContainer: {
    marginTop: 30
  },

  buttonLabel: {
    fontWeight: 'bold',
    textAlign: 'center'
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

  /* ALT TEXT WRITING */
  writingContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },

  textbox: {
    marginTop: 10,
    padding: 10,
    color: '#666666',
    backgroundColor: '#FAFAFA',
    borderRadius: 5
  },

  textboxInstruction: {
    margin: 20,
    textAlign: 'center',
    color: '#B1A9A9'
  }



});

export {styles}
