import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';

import logo from '../../../assets/images/logoGas.png'
import { Button } from '../../Button';
import { Input } from '../../Input';

import styles from './styles';

const ChallengeGas = () => {
  const [form, setForm] = useState({
    alcool: '',
    gas: ''
  })

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Qual melhor opção?</Text>
      <View style={styles.form}>
        <Input label='Álcool (preço por litro):' value={form.alcool} color='#fff' onChange={e => setForm({ ...form, alcool: e})} />
        <Input label='Gasolian (preço por litro):' value={form.gas} color='#fff' onChange={e => setForm({ ...form, gas: e})} />
        <Button label='Calcular' bgColor='#ff1500' color='#fff' />
      </View>
    </View>
  )
}

export default ChallengeGas;