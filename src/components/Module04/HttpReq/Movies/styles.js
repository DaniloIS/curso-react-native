import { StyleSheet } from  'react-native';

export default StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    padding: 15
  },

  img: {
    height: 250,
    zIndex: 2,
  },

  btnArea: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },

  btn: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  btnText: {
    textAlign: 'center',
    color: "#fff"
  }
})