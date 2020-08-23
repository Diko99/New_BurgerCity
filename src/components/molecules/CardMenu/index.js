import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils';

const CardMenu = ({title, uri}) => {
  return (
    <View style={styles['content-card']}>
      <View style={styles['card-desc']}>
        <Image source={uri} />
        <Text style={styles['title-menu']}>{title}</Text>
      </View>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  'content-card': {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 145,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'title-menu': {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
