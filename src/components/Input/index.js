import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const Input = ({label, placeholder, value, color, onChange, type = 'default', inputRef }) => {
  return (
    <View>
      <Text style={[styles.label, { color: color}]}>{label}</Text>
      <TextInput style={[styles.input, { color: color}]} ref={inputRef} placeholder={placeholder} value={value} onChangeText={onChange} keyboardType={type} />
    </View>
  )
}

export { Input };