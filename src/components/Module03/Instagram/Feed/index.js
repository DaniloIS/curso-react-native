import React from 'react';
import { View, FlatList } from 'react-native';
import { List } from '../List';

const Feed = () => {
  const feed = [
    {
      id: '1', 
      name: 'Lucas Silva', 
      description: 'Mais um dia de muitos bugs :)', 
      imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPub: 'https://sujeitoprogramador.com/instareact/foto1.png',  
      likeada: false, 
      likers: 0
     },
    {
      id: '2', 
      name: 'Matheus', 
      description: 'Isso sim é ser raiz!!!!!', 
      imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPub: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      name: 'Jose Augusto', 
      description: 'Bora trabalhar Haha', 
      imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPub: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      name: 'Gustavo Henrique', 
      description: 'Isso sim que é TI!', 
      imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPub: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      name: 'Guilherme', 
      description: 'Boa tarde galera do insta...', 
      imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPub: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ]

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={feed}
        keyExtractor={(item => item.id)}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  )
}

export { Feed };