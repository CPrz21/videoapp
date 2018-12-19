import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'

export default Category = (props) => {
  return(
    <ImageBackground
    style={styles.wrapper}
    source={{ uri: props.medium_cover_image}}
    >
      <Text style={styles.genre}>{props.genres ? props.genres[0] : 'no category'}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    width:250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre:{
    color:'white',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor:'rgba(0,0,0,.75)',
    textShadowOffset:{
      width: 2,
      height: 2
    },
    textShadowRadius: ,
  }
});