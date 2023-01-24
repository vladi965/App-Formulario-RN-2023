import { StyleSheet, Dimensions } from 'react-native';
import { myColors } from '../../styles/color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CarouselStyle = StyleSheet.create({
    BoxContainer: {
        height: 100,
        width: WIDTH * 0.6,
        marginRight: 30,
    },
    BoxCarousel: {
        height: 150,
        width: 100,
        borderRadius: 8,
        padding: 15,
        zIndex: -1
    },
    BoxTransparent: {
        height: 144,
        width: 120,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1,
        marginTop: -144,
        borderRadius: 8
    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginTop: 50,
        textAlign: 'center'
    },
    flatList: {
        paddingHorizontal: 10
    },
    image: {
        width: WIDTH - 130,
        height: HEIGHT / 5,
        borderRadius: 8,
        resizeMode: 'contain'
    }
})