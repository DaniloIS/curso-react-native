import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { api } from '../../../services/api';

import { Movies } from './Movies';

import styles from './styles';

const HttpReq = () => {
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('r-api/?api=filmes').then(res => {
      setMovies(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <View style={styles.container}>
      {loading ? 
      <ActivityIndicator color='#09a6ff' size={40} />
      :
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Movies data={item} />}
      />
    }
    </View>
  )
}

export { HttpReq };