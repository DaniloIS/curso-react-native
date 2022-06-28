import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ label, onClick, bgColor = '#50c878', color = '#fff' }) => {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor }]} onPress={onClick} activeOpacity={0.90}>
      <Text style={[styles.btnText, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  )
}

export { Button };