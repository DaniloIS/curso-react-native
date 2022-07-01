import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Instagram } from '../../components/Module03/Instagram';

const Home = () => {
  const navigation = useNavigation();

  function navegateToDetails() {
    navigation.navigate('details')
  }
  return (
    <>
      <TouchableOpacity onPress={navegateToDetails}>
        <Text>Detalhes</Text>
      </TouchableOpacity>
      <ScrollView>
        <Instagram />
      </ScrollView>
    </>
  )
}

export { Home };