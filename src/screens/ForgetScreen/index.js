import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {colors} from '../../utils';
import {IL_Background} from '../../assets';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {LogoBurger, DescIntro, Gap, Input, Button} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ForgetScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const login = () => {
    setIsVisible(false);
    navigation.replace('Home');
  };

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
      <Button title="Proceed" onPress={() => setIsVisible(!isVisible)} />

      <Modal isVisible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modal_content}>
            <View style={styles.ceklist}>
              <FontAwesome name="check" size={40} color={colors.secondary} />
            </View>
          </View>
          <Text style={styles['content-title']}>SENDING</Text>
          <Text style={styles['content-desc']}>
            We're sending the link for verify your account. please check your
            mailbox
          </Text>
          <Button title="DONE" onPress={login} />
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  modal: {
    backgroundColor: colors.secondary,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    textAlign: 'center',
  },
  modal_content: {
    alignItems: 'center',
    marginTop: -44,
  },
  ceklist: {
    backgroundColor: colors.primary,
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 8,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'content-title': {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  'content-desc': {
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 14,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
