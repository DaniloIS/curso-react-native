import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { api_coin } from '../../../services/api_coin';
import { Button } from '../../Button';
import { Input } from '../../Input';

const CoinConverter = () => {
  const [value, setValue] = useState(0)
  const [coin, setCoin] = useState('')
  const [coinConverted, setCoinConverted] = useState()

  const calc = () => setCoinConverted(coin*value)

  useEffect(() => {
    api_coin.get('convert?q=USD_BRL&compact=ultra&apiKey=382a542f14681350e0fe').then(res => {
      setValue(res.data.USD_BRL)
    })
  }, [])

  return (
    <View>
      <Input placeholder='Dolar' type='numeric' value={coin} onChange={setCoin} />
      <Button label='Calcular' onClick={calc}/>
      <Text>{coinConverted}</Text>
    </View>
  )
}

export { CoinConverter };