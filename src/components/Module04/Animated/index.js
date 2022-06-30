import React from 'react';
import { View, Animated } from 'react-native';

const Animation = () => {
  const readAnimated = new Animated.Value(0)

  Animated.timing(readAnimated, {
    toValue: 100,
    duration: 500
  }).start()

  let porAnimeted = readAnimated.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })
  
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#41691e', width: porAnimeted, height: 25}}></View>
    </View>
  )
}

export { Animation };