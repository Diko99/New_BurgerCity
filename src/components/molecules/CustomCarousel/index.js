import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CustomCarousel = ({renderItem, data}) => {
  const {width} = Dimensions.get('window');
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

export default CustomCarousel;
