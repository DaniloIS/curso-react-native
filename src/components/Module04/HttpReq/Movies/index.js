import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Movies = ({ data }) => {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={data.foto} style={styles.img} />
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Movies };