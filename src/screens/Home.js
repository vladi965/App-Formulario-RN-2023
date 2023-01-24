import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles/main';
import Search from '../components/search/Search';
import TitleIcon from '../components/title-icon/TitleIcon';
import BoxPrincipal from '../components/box/BoxPrincipal';
import {LISTA_CAROUSEL} from '../data/CarouselCard';
import CarouselPrincipal from '../components/carousel/CarouselPrincipal';

export default function Home() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <Search />
        <View>
          <CarouselPrincipal data={LISTA_CAROUSEL}/>
        </View>
        <View>
          <TitleIcon title={'Temas Favoritos'} />
        </View>
      </View>
    </SafeAreaView>
  );
}
