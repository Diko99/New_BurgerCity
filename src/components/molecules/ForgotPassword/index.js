import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgotPassword = ({onPress}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.wraperRemember}>
        <RadioButton
          uncheckedColor="white"
          color="white"
          value={checked}
          status={checked === true ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
        <Text style={styles.remember}>Remember me</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wraperRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -5,
  },
  forgot: {
    color: colors.secondary,
    fontSize: 12,
  },
  remember: {
    color: colors.secondary,
    fontSize: 12,
  },
});
