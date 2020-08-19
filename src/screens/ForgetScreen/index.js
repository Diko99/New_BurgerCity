import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {IL_Background} from '../../assets';
import {LogoBurger, DescIntro, Gap, Input, Button} from '../../components';

const ForgetScreen = () => {
  return (
    <ImageBackground source={IL_Background} style={styles.container}>
      <LogoBurger />
      <Gap height={50} />
      <DescIntro
        light
        top="Forget password"
        bottom="Please fill with your email"
      />
      <Gap height={50} />
      <Input icon="email" placeholder="Email Address" />
      <Gap height={15} />
      <Button title="Proceed" />
    </ImageBackground>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
