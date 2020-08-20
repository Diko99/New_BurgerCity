import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CustomCarousel = ({renderItem, data, sliderWidth, itemWidth}) => {
  const {width} = Dimensions.get('window');
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({});
