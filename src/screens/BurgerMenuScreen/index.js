import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Gap, HeaderImage, ItemList} from '../../components';
import {colors} from '../../utils';

const BurgerMenuScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderImage />
        <View style={styles['content-top']}>
          <Text style={styles['desc-top']}>Burger Menu</Text>
          <Text style={styles['desc-bottom']}>Chess, Beef, Spicy</Text>
          <View style={{marginTop: 20}}>
            <View style={styles['row-content']}>
              <Text>Delivery cost</Text>
              <TouchableOpacity>
                <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                  Rp 15.000
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles['row-content']}>
              <Text>Check for available promos</Text>
              <TouchableOpacity>
                <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                  See Promos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles['content-item-list']}>
          <Text style={styles['content-item-list-title']}>Item List</Text>
          <Gap height={22} />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
        </View>
      </View>
    </ScrollView>
  );
};

export default BurgerMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  'content-top': {
    backgroundColor: 'white',
    padding: 20,
  },
  'desc-top': {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  'desc-bottom': {
    fontSize: 15,
    color: '#727C8E',
  },
  'row-content': {
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  'content-item-list': {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  'content-item-list-title': {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
