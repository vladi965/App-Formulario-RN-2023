import React from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import {CarouselStyle} from './CarouselStyle';


export default function CarouselPrincipal({data}) {
  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        decelerationRate = 'fast'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={CarouselStyle.flatList}
        keyExtractor={(i) => i.id}
        renderItem={({ item, index }) => {
          return (
            <View style={CarouselStyle.BoxContainer}>
              <View style={CarouselStyle.BoxCarousel}>
                <Image style={CarouselStyle.image} source={item.image}/>
                <View style={CarouselStyle.BoxTransparent}>
                  <Text style={CarouselStyle.title}>{item.title}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
}

