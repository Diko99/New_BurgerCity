import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {
  HeaderItem,
  Search,
  CustomCarousel,
  Button,
  CardMenu,
} from '../../components';
import {
  IL_SliderImg,
  IL_Menu_meal,
  IL_Menu_salad,
  IL_Menu_dessert,
  IL_Menu_beverage,
} from '../../assets';

const renderItem = () => {
  return (
    <View style={styles['content-slide']}>
      <Image source={IL_SliderImg} style={styles['image-slide']} />
    </View>
  );
};

const OurBurgerScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderItem type="back" onPress={() => navigation.navigate('Home')} />
      <ScrollView>
        <Search />
        <CustomCarousel data={[1, 2, 3]} renderItem={renderItem} />
        <View style={styles['wrapper-content']}>
          <CardMenu uri={IL_Menu_meal} title="Value meals" />
          <CardMenu uri={IL_Menu_salad} title="Salads / Sides" />
          <CardMenu uri={IL_Menu_dessert} title="Desserts" />
          <CardMenu uri={IL_Menu_beverage} title="Beverages" />
        </View>
        <View style={styles.button}>
          <Button
            title="Burger Menu"
            onPress={() => navigation.navigate('BurgerMenu')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OurBurgerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  'content-slide': {
    alignItems: 'center',
  },
  'image-slide': {
    width: 312,
    borderRadius: 10,
    height: 193,
  },
  'wrapper-content': {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
});
