import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IL_BeefBg} from '../../../assets';
import {colors} from '../../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemList = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles['wrapper-content-left']}>
        <View style={{marginRight: 20}}>
          <Image source={IL_BeefBg} />
          <View style={styles['wrapper-new']}>
            <Text style={styles.new}>New</Text>
          </View>
        </View>
        <View>
          <Text>Cheesy Burger</Text>
          <Text
            style={{color: colors.primary, fontWeight: 'bold', marginTop: 5}}>
            Rp. 50.000,-
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setActive(!active)}>
          <AntDesign name="star" size={21} color={active ? colors.primary : '#E5E5E5'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            backgroundColor: colors.primary,
            flexDirection: 'row',
            padding: 5,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: colors.secondary}}>Add</Text>
          <MaterialIcons name="add" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  'wrapper-content-left': {
    flexDirection: 'row',
  },
  'content-left': {
    backgroundColor: 'blue',
  },
  'wrapper-new': {
    backgroundColor: 'red',
    width: 25,
    borderRadius: 25 / 2,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  new: {
    fontSize: 10,
    color: 'white',
  },
});
