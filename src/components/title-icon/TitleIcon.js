import React from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TitleIconStyle } from './TitleIconStyle';

export default function titleIcon ({title}) {
  return (
    <View style={TitleIconStyle.contentTitle}>
      <Text style={TitleIconStyle.title}>{title}</Text>
      <Icon name="arrow-right" color="#000000" size={18} />
    </View>
  )
}
