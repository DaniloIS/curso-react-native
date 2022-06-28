import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import like from '../../../../assets/images/like.png';
import likeada from '../../../../assets/images/likeada.png';
import send from '../../../../assets/images/send.png';

import styles from './styles';

const List = ({ data }) => {
  const [feed, setFeed] = useState(data)

  function viewLikes() {
    if(feed.likers <= 0) return
    
    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  function handleLike() {
    if(feed.likeada === true) {
      setFeed({
        ...feed,
        likeada: false,
        likers: feed.likers - 1
      })
    } else {
      setFeed({
        ...feed,
        likeada: true,
        likers: feed.likers + 1
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewProfile}>
        <Image
          source={feed.imgProfile}
          style={styles.imgProfile}
        />
        <Text style={styles.nameProfile}>{feed.name}</Text>
      </View>
      <Image
        resizeMode='cover'
        source={feed.imgPub}
        style={styles.photoFeed}
      />

      <View style={styles.btnIcons}>
        <TouchableOpacity onPress={handleLike}>
          <Image source={feed.likeada ? likeada : like} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingLeft: 5}}>
          <Image source={send} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {viewLikes(feed.likers)}

      <View style={styles.viewFooter}>
        <Text style={styles.nameFooter}>
          {feed.name}
        </Text>

        <Text style={styles.descFooter}>
          {feed.description}
        </Text>
      </View>
    </View>
  )
}

export { List };