import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getItems } from '../../services/firebaseConnection';

const Profile = () => {
  const [users, setUsers] = useState('a');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems('users').then(res => {
      setUsers(res)
      setLoading(false)
    })
  }, [])
  console.log(users)
  return (
    <View>
      { loading ? 
      <ActivityIndicator color='#121212' size={45} />
      :
      <FlatList
        data={users}
        keyExtractor={item => item.key}
        renderItem={({item}) => <Text>{item.user}</Text>}
      />
      }
    </View>
  )
}

export { Profile };