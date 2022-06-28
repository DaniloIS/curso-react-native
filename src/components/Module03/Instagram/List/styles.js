import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  nameProfile: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },

  photoFeed: {
    flex: 1,
    height: 400
  },

  btnIcons: {
    flexDirection: 'row',
    padding: 5
  },

  icon: {
    width: 33,
    height: 33
  },

  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  descFooter: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },

  nameFooter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },

  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }
})