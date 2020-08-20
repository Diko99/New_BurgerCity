import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {IL_SliderImg} from '../../assets';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderItem, TicketItem, Gap, CustomCarousel} from '../../components';

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
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <HeaderItem />
      <ScrollView>
        <CustomCarousel
          data={[1, 2, 3]}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
        />
        <View style={styles.content}>
          <TicketItem title="Track Here" subtitle="Order to Track Your Food" />
          <Gap height={10} />
          <TicketItem
            title="Order Here"
            subtitle="Choice Your Delicious Burger"
          />
          <View style={styles['wrapper-card']}>

          </View>
        </View>
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
});
