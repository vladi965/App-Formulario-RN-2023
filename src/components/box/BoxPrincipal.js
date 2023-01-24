import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import {BoxPrincipalStyle} from './BoxPrincipalStyle';
import {LISTA_DATA} from '../../data/DataCard';


const CARD_SPACING = 10;

export default function BoxPrincipal() {
  const [data] = React.useState(LISTA_DATA);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={BoxPrincipalStyle.flatList}
        horizontal={true}
        snapToInterval={CARD_SPACING}
        decelerationRate = 'fast'
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={BoxPrincipalStyle.cardContainer}>
                <View style={[BoxPrincipalStyle.card, { backgroundColor: item.color, borderColor: item.color }]}>
                  <Image source={item.image} style={BoxPrincipalStyle.image}/>
                </View>
                <View style={BoxPrincipalStyle.ContentText}>
                 <Text style={BoxPrincipalStyle.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
          )
        }}
      />
     </View>
  );
}
