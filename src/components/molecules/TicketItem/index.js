import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IL_TicketBg, IL_BgCity_logo} from '../../../assets';
import {colors} from '../../../utils';

const TicketItem = ({title, subtitle}) => {
  return (
    <View style={styles['content-ticket']}>
      <Image source={IL_TicketBg} style={styles['ticket-background']} />
      <View style={styles['content-ticket-desc']}>
        <Image source={IL_BgCity_logo} style={styles['ticket-logo']} />
        <View style={styles['ticket-desc']}>
          <Text style={styles['ticket-desc-top']}>{title}</Text>
          <Text style={styles['ticket-desc-bottom']}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketItem;

const styles = StyleSheet.create({
  'content-ticket': {
    alignItems: 'center',
  },
  'ticket-background': {
    width: 320,
    height: 90,
  },
  'ticket-logo': {
    width: 40,
    height: 50,
  },
  'content-ticket-desc': {
    position: 'absolute',
    flexDirection: 'row',
    left: 40,
    padding: 20,
  },
  'ticket-desc': {
    marginLeft: 20,
    justifyContent: 'center',
  },
  'ticket-desc-top': {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  'ticket-desc-bottom': {
    fontSize: 12,
    lineHeight: 20,
    color: colors.secondary,
  },
});
