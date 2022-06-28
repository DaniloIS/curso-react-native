import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './styles';

const SliderComponent = () => {
  const [value, setValue] = useState(0)


  return (
    <View style={styles.container}>
      <Slider 
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor='#00ff00'
        maximumTrackTintColor='#ff0000'
      />
      <Text>{value.toFixed(2)}</Text>
    </View>
  )
}

export { SliderComponent };