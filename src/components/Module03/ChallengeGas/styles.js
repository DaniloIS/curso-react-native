import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626'
  },

  logo: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 40
  },

  form: {
    height: 200,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly'
  }
})