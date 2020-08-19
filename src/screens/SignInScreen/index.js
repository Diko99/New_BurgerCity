import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {
  Input,
  Gap,
  Button,
  Link,
  DescIntro,
  LogoBurger,
} from '../../components';
import {IL_Background} from '../../assets';

const SignInScreen = ({navigation}) => {
  return (
    <ImageBackground source={IL_Background} style={styles.container}>
      <LogoBurger />
      <DescIntro top="Sign Up" bottom="Create Your Burger City Account" />
      <View style={styles.content}>
        <Input icon="user-circle" placeholder="Username" />
        <Gap height={16} />
        <Input icon="email" placeholder="Email Address" />
        <Gap height={16} />
        <Input icon="password" placeholder="Password" />
        <Gap height={16} />
        <Input icon="confirm-password" placeholder="Confirm Password" />
        <Gap height={20} />
        <Button title="Next" onPress={() => navigation.navigate('Login')} />
      </View>
      <Link onPress={() => navigation.navigate('Login')} />
      <Gap />
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  content: {
    marginBottom: 40,
  },
});
