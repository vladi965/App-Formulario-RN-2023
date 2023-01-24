import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchStyle } from './SearchStyle';

export default function Search () {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={SearchStyle.contentSearch}>
      <Icon name="search" color="#414141" size={18} />
      <TextInput style={SearchStyle.contentText} onChangeText={onChangeText} value={text} placeholder="Buscar..." />
    </View>
  );
};

