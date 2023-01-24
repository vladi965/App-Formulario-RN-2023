import { StyleSheet } from 'react-native';
import { myColors } from '../../styles/color';

export const SearchStyle = StyleSheet.create({
    contentSearch: {
        width: 320,
        height: 50,
        backgroundColor: myColors.lightBlue,
        padding: 15,
        border: '1px solid myColors.lightBlue',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentText: {
        marginLeft: 15,
        height: 50,
        width: 250,
        color: myColors.black,
        fontSize: 16
    }
})