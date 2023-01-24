import { StyleSheet, Dimensions } from 'react-native';
import { myColors } from '../../styles/color';

const {width} = Dimensions.get('window');

export const BoxPrincipalStyle = StyleSheet.create({
    cardContainer: {
        height: 100,
        width: width * 0.3,
        marginRight: 5,
    },
    card: {
        height: 100,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 74,
        height: 74,
        resizeMode: 'contain'
    },
    flatList: {
        paddingHorizontal: 20
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
    },
    ContentText: {
        marginTop: 10,
    }
})