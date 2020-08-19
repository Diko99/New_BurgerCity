import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {IL_BgCity_logo} from '../../../assets';

const LogoBurger = ({type}) => {
  return (
    <View style={styles.wrapperLogo(type)}>
      <Image source={IL_BgCity_logo} style={styles.logo(type)} />
    </View>
  );
};

export default LogoBurger;

const styles = StyleSheet.create({
  wrapperLogo: (type) => ({
    alignItems: 'center',
    paddingTop: type ? 80 : 40,
    marginBottom: type ? 120 : 14,
  }),
  logo: (type) => ({
    width: type ? 100 : 67,
    height: type ? 120 : 80,
  }),
});
