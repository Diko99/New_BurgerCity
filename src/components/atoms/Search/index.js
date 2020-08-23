import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../utils';

const Search = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-sharp" size={20} />
      <TextInput placeholder="Search for a Food" style={styles.input} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    paddingHorizontal: 20,
  },
});
