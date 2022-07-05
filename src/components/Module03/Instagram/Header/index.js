import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import logo from '../../../../assets/images/logo.png'
import send from '../../../../assets/images/send.png'
import { Login } from '../Login';
import { Register } from '../Register';

import styles from './styles';

const Header = () => {
  const [show, setShow] = useState(false)
  const [model, setModel] = useState('login')

  const handleModal = () => setShow(!show)

  const mod = () => model === 'login' ? setModel('register') : setModel('login')

  function logoff() {
    AsyncStorage.removeItem('user')
  }
  return (
    <View style={{position: 'fixed', zIndex: 1, width: '100%'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.logo} source={logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleModal}>
          <Image style={styles.send} source={send} />
        </TouchableOpacity>
      </View>
      <Modal transparent animationType='slide' visible={show}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={handleModal}>
                <FontAwesome name="close" size={24} color="#85938a" />
              </TouchableOpacity>
            </View>
            <View  style={styles.modalContent}>
              { model === 'login'?
                <Login />
                :
                <Register />
              }
              <TouchableOpacity onPress={mod}><Text>{model === 'login'? 'Cadastrar' : 'Entrar'}</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export { Header };