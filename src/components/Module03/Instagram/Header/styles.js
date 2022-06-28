import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  logo: {
    width: 75,
    height: 23
  },

  send: {
    width: 23,
    height: 23
  },

  modal: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 250
  },

  modalHeader: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    padding: 10
  },

  modalContent: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})