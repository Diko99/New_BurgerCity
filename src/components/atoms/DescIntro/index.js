import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const DescIntro = ({top, bottom, light}) => {
  return (
    <View style={styles.wrapperTitle}>
      <Text style={styles.title}>{top}</Text>
      <Text style={styles.subtitle(light)}>{bottom}</Text>
    </View>
  );
};

export default DescIntro;

const styles = StyleSheet.create({
  wrapperTitle: {
    alignItems: 'center',
    marginBottom: 34,
  },
  title: {
    fontSize: 22,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  subtitle: (light) => ({
    fontSize: 16,
    color: colors.secondary,
    fontWeight: light ? null : 'bold',
  }),
});
