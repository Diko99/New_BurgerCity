import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {
  IC_Home,
  IC_Home_active,
  IC_OurBurger_active,
  IC_OurBurger,
  IC_Star_active,
  IC_Star,
  IC_Profile,
  IC_Profile_Active,
} from '../../../assets/Icons';

const Tab = ({title, active, onLongPress, onPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IC_Home_active /> : <IC_Home />;
    }
    if (title === 'Our Burgers') {
      return active ? <IC_OurBurger_active /> : <IC_OurBurger />;
    }
    if (title === 'Favourites') {
      return active ? <IC_Star_active /> : <IC_Star />;
    }
    if (title === 'Profile') {
      return active ? <IC_Profile_Active /> : <IC_Profile />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.primary : colors.disable,
    marginTop: 4,
  }),
});
