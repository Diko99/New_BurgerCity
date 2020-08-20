import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {IL_Background} from '../../assets';
import {colors} from '../../utils';
import {
  LogoBurger,
  DescIntro,
  Input,
  Gap,
  Button,
  ForgotPassword,
  Link,
} from '../../components';

const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground source={IL_Background} style={styles.container}>
      <LogoBurger />
      <Gap height={10} />
      <DescIntro
        light
        top="Welcome Back!"
        bottom="Login to continue Burger City"
      />
      <Input icon="email" placeholder="Email Address" />
      <Gap height={20} />
      <Input icon="password" placeholder="Password" />
      <ForgotPassword onPress={() => navigation.navigate('Forget')} />
      <Gap height={20} />
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
      <Gap height={30} />
      <Link type="login" onPress={() => navigation.navigate('SignIn')} />
      <View style={styles.content}>
        <Text style={styles.desc}>
          By signing up you indicate that you have read and{' '}
          <Text style={styles.descs}>
            agreed to the Patch{' '}
            <Text style={{textDecorationLine: 'underline'}}>
              Terms of Service
            </Text>
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  content: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    width: 200,
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 10,
  },
  descs: {
    fontWeight: 'bold',
  },
});
