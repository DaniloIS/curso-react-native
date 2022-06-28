import React from 'react';
import { View } from 'react-native';
import { Feed } from './Feed';
import { Header } from './Header';

import styles from './styles';

const Instagram = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
    </View>
  )
}

export { Instagram };