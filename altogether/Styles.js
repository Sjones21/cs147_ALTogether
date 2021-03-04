import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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

  barIcons: {
    flexDirection: 'row'
  },

  icons: {
    height: 25,
    width: 25,
    margin: 5
  },

  contentContainer: {
    flexGrow: 1,
    flexShrink: 1
  },

  scrollContainer: {
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

  exampleButton: {
    padding: 15,
    margin: 10,
    marginBottom:30,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  headerButton: {
    padding: 10,
    paddingTop: 3,
    paddingBottom:5,
    margin: 5,
    marginRight:100,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  cardContainer: {
    marginTop: 30
  },

  gridImage: {
    height: 140,
    width: 140
  },

  numberContainer: {

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

  header1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  }

});

export {styles}
