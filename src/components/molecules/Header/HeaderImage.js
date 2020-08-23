import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {IL_AppBar_Bg} from '../../../assets';

const HeaderImage = ({onPress}) => {
  return (
    <View style={styles['header-image']}>
      <Image source={IL_AppBar_Bg} style={styles['image-bar']} />
      <EvilIcons name="arrow-left" size={40} style={styles['icon-back']} />
    </View>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  'image-bar': {
    width: 360,
    height: 218,
  },
  'icon-back': {
    position: 'absolute',
    top: 35,
    left: 15,
    color: 'white',
  },
});
