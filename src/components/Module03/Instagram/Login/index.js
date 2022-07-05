import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Instagram } from '../index'
import { Button } from '../../../Button';
import { Input } from '../../../Input';

import { loginUser } from '../../../../services/firebaseConnection';

import styles from './styles';

const Login = () => {
  const [login, setLogin] = useState({
    user: '',
    password: ''
  })
  const [loged, setLoged] = useState(false)

  const navigation = useNavigation();

  const getUser = () => AsyncStorage.getItem('user').then(res => {
    if(res) setLoged(true)
  })

  useEffect(() => {
    getUser()
  }, [login])

  async function handleSubmit() {
    if(!login.user) return
    loginUser(login.user, login.password).then(res => {
      console.log(res)
    })
    // await AsyncStorage.setItem('user', login.user);
    // alert('Login efetuado com sucesso!')
    // setLoged(true)
    // Keyboard.dismiss();
    // navigation.navigate('home')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LOGIN</Text>
      <View style={styles.form}>
        <Input placeholder='Usuário' value={login.user} onChange={e => setLogin({...login, user: e})} />
        <Input placeholder='Senha' value={login.password} onChange={e => setLogin({...login, password: e})} type='password' />
        <Button label='Entrar' onClick={handleSubmit} />
      </View>
    </View>
  )
}

export { Login };