import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IL_Logo, IC_NotifOn} from '../../../assets';
import {colors} from '../../../utils';

const HeaderItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles['item-left']}>EN</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={25}
          color={colors.primary}
        />
      </View>
      <View style={styles.center}>
        <Image source={IL_Logo} />
      </View>
      <IC_NotifOn />
    </View>
  );
};

export default HeaderItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'item-left': {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  center: {
    marginLeft: -20,
    alignItems: 'center',
  },
});
