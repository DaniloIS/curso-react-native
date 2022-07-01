import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getItems } from '../../services/firebaseConnection';

const Profile = () => {
  const [users, setUsers] = useState('a');

  useEffect(() => {
    getItems('users').then(res => {
      setUsers(res)
    })
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

export { Profile };