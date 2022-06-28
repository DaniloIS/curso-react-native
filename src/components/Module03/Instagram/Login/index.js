import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Instagram } from '../index'
import { Button } from '../../../Button';
import { Input } from '../../../Input';

import styles from './styles';

const Login = () => {
  const [login, setLogin] = useState({
    user: '',
    password: ''
  })
  const [loged, setLoged] = useState(false)

  const getUser = () => AsyncStorage.getItem('user').then(res => {
    if(res) setLoged(true)
  })

  useEffect(() => {
    getUser()
  }, [login])

  async function handleSubmit() {
    if(!login.user) return
    await AsyncStorage.setItem('user', login.user);
    alert('Login efetuado com sucesso!')
    setLoged(true)
    Keyboard.dismiss();
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