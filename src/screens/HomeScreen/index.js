import React from 'react';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {IL_SliderImg} from '../../assets';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  HeaderItem,
  TicketItem,
  Gap,
  CustomCarousel,
  CustomCard,
} from '../../components';

const renderItem = () => {
  return (
    <View style={styles['content-slide']}>
      <Image source={IL_SliderImg} style={{height: 232}} />
      <View style={styles['content-slide-desc']}>
        <Text style={styles['desc-top']}>World's Greatest</Text>
        <Text style={styles['desc-bottom']}> Burgers.</Text>
      </View>
    </View>
  );
};

const HomeScreem = () => {
  return (
    <View style={styles.container}>
      <HeaderItem />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomCarousel data={[1, 2, 3]} renderItem={renderItem} />
        <View style={styles.content}>
          <TicketItem title="Track Here" subtitle="Order to Track Your Food" />
          <Gap height={10} />
          <TicketItem
            title="Order Here"
            subtitle="Choice Your Delicious Burger"
          />
        </View>
        <Text style={styles['title-item']}>Best Offers</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles['content-card']}>
            <CustomCard menu="Cheesy Burger" idr="50.000" />
            <CustomCard menu="Chiecken Big Burger" idr="50.000" />
            <CustomCard menu="Beef Burger" idr="50.000" />
            <CustomCard menu="Special Burger" idr="50.000" />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  'content-slide-desc': {
    position: 'absolute',
    top: 30,
    left: 17,
  },
  'desc-top': {
    fontSize: 24,
    color: colors.secondary,
  },
  'desc-bottom': {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.secondary,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  'title-item': {
    fontSize: 18,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  'content-card': {
    flexDirection: 'row',
    padding: 20,
    marginRight: -10,
  },
});
