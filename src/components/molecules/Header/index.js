import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IL_Logo, IC_NotifOn} from '../../../assets';
import {colors} from '../../../utils';

const HeaderItem = ({type, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {type === 'back' ? null : <Text style={styles['item-left']}>EN</Text>}
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name={type === 'back' ? 'arrow-back' : 'keyboard-arrow-down'}
            size={25}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <Image source={IL_Logo} style={styles.logo(type)} />
      <IC_NotifOn />
    </View>
  );
};

export default HeaderItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
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
  logo: (type) => ({
    marginLeft: type === 'back' ? 0 : -20,
    alignItems: 'center',
  }),
});
