import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Button, Gap, LogoBurger, CustomCarousel} from '../../components/';
import {colors} from '../../utils/colors';
import {IL_Background} from '../../assets';

const renderItem = () => {
  return (
    <View style={styles['text-wrapper']}>
      <Text style={styles['text-slide']}>World's Greatest Burgers.</Text>
    </View>
  );
};

const SplashScreen = ({navigation}) => {
  return (
    <ImageBackground source={IL_Background} style={styles.container}>
      <LogoBurger type="splash" />
      <CustomCarousel data={[1, 2, 3]} renderItem={renderItem} />
      <Button
        title="Get start here"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Gap height={20} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  'text-wrapper': {
    flex: 1,
  },
  'text-slide': {
    width: 100,
    paddingTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
