import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Input = ({placeholder, icon}) => {
  const IconCustom =
    icon === 'user-circle' ? (
      <FontAwesome name="user-circle" size={18} color="#727C8E" />
    ) : icon === 'email' ? (
      <Fontisto name="email" size={18} color="#727C8E" />
    ) : icon === 'password' || icon === 'confirm-password' ? (
      <Fontisto name="locked" size={18} color="#727C8E" />
    ) : (
      <FontAwesome name="user-circle" size={18} color="#727C8E" />
    );
  return (
    <View style={styles.container}>
      {IconCustom}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    paddingLeft: 10,
  },
});
