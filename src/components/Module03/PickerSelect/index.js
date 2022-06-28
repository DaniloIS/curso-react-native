import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

const PickerSelect = () => {
  const [pizza, setPizza] = useState(0)

  const pizzas = [
    {id: 0, name: 'Paulista', price: 35.90},
    {id: 1, name: 'Queijo', price: 30.90},
    {id: 2, name: 'Calabresa', price: 30.90},
    {id: 3, name: 'Brigadeiro', price: 25.90},
    {id: 4, name: 'Strogonoff', price: 37.90},
  ]

  let pizzasItem = pizzas.map((pizza, key) => {
    return <Picker.Item key={key} value={pizza.id} label={pizza.name} />
  })

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
        selectedValue={pizza}
        onValueChange={item => setPizza(item)}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.pizza}>Você Escolheu: Pizza {pizzas[pizza].name}</Text>
      <Text style={styles.pizza}>{pizzas[pizza].price.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
    </View>
  )
}

export { PickerSelect };