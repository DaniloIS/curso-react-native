import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Instagram } from '../index'
import { Button } from '../../../Button';
import { Input } from '../../../Input';

import { createUser, setItem } from '../../../../services/firebaseConnection';

import styles from './styles';

const Register = () => {
  const [form, setForm] = useState({
    user: '',
    email: '',
    password: ''
  })

  const navigation = useNavigation();

  const getUser = () => AsyncStorage.getItem('user').then(res => {
    if(res) setLoged(true)
  })

  useEffect(() => {
    
  }, [])

  async function handleSubmit() {
    if(!form.user) return
    createUser(form).then(res => {
      console.log(res)
    })
    // setItem('users', form)
    // Keyboard.dismiss();
    // navigation.navigate('home')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Cadastro</Text>
      <View style={styles.form}>
        <Input placeholder='Usuário' value={form.user} onChange={e => setForm({...form, user: e})} />
        <Input placeholder='exemplo@email.com' value={form.email} onChange={e => setForm({...form, email: e})} />
        <Input placeholder='Senha' value={form.password} onChange={e => setForm({...form, password: e})} type='password' />
        <Button label='Entrar' onClick={handleSubmit} />
      </View>
    </View>
  )
}

export { Register };