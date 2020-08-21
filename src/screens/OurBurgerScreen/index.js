import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {HeaderItem, Search, CustomCarousel} from '../../components';
import {IL_SliderImg, IL_Menu_meal} from '../../assets';

const renderItem = () => {
  return (
    <View style={styles['content-slide']}>
      <Image source={IL_SliderImg} style={styles['image-slide']} />
    </View>
  );
};

const OurBurgerScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderItem />
      <ScrollView>
        <Search />
        <View style={styles.content}>
          <CustomCarousel data={[1, 2, 3]} renderItem={renderItem} />
          <View style={styles.card}>
            <View style={styles['card-content']}>
              <Image source={IL_Menu_meal} />
              <Text>Value meals</Text>
            </View>
            <View style={styles['card-content']}>
              <Image source={IL_Menu_meal} />
              <Text>Value meals</Text>
            </View>
            <View style={styles['card-content']}>
              <Image source={IL_Menu_meal} />
              <Text>Value meals</Text>
            </View>
            <View style={styles['card-content']}>
              <Image source={IL_Menu_meal} />
              <Text>Value meals</Text>
            </View>
          </View>
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
    borderRadius: 1,
    justifyContent: 'center',
  },
  'image-slide': {
    width: 312,
    borderRadius: 10,
    height: 193,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  card: {
    marginTop: 35,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'card-content': {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 144,
    width: 144,
    backgroundColor: 'white',
  },
});
