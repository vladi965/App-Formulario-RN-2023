import { StyleSheet } from 'react-native';
import { myColors } from '../../styles/color';

export const TitleIconStyle = StyleSheet.create({
    contentTitle: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: myColors.black
    }
})