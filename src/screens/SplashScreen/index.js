import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Button, Gap, LogoBurger} from '../../components/';
import {colors} from '../../utils/colors';
import {IL_Background} from '../../assets';
import Carousel from 'react-native-snap-carousel';

const renderItem = () => {
  return (
    <View style={styles['text-wrapper']}>
      <Text style={styles['text-slide']}>World's Greatest Burgers.</Text>
    </View>
  );
};

const SplashScreen = ({navigation}) => {
  const {width} = Dimensions.get('window');
  return (
    <ImageBackground source={IL_Background} style={styles.container}>
      <LogoBurger type="splash" />
      <Carousel
        data={[1, 2, 3]}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
      />
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
