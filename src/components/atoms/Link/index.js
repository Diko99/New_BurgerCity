import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';

const Link = ({onPress, type}) => {
  const Description = () => {
    if (type === 'login') {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.action}>New User? Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.desc}>Have an account? </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.action}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return <Description />;
};

export default Link;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  desc: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  action: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
