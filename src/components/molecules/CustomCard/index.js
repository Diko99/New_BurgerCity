import React from 'react';
import StarRating from 'react-native-star-rating';
import {IL_Image} from '../../../assets';
import {StyleSheet, Text, View, Image} from 'react-native';

const CustomCard = ({menu, idr}) => {
  return (
    <View style={styles.container}>
      <Image source={IL_Image} />
      <View>
        <Text style={styles['card-title']}>{menu}</Text>
        <StarRating
          disabled
          maxStars={5}
          rating={3}
          starSize={13}
          fullStarColor="#ff9f1c"
          emptyStar="star"
          emptyStarColor="#cecece"
          containerStyle={styles['card-star']}
        />
        <Text style={styles['card-price']}>Rp. {idr} .-</Text>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F7',
    marginRight: 10,
  },
  'card-title': {
    fontSize: 13,
    marginTop: 5,
  },
  'card-star': {
    paddingRight: 60,
    marginVertical: 7,
  },
  'card-price': {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
