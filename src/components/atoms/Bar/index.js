import React from 'react';
import {StatusBar} from 'react-native';

export default function Bar() {
  return (
    <StatusBar
      translucent
      barStyle="light-content"
      backgroundColor="transparent"
    />
  );
}
