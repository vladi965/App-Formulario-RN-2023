import { StyleSheet, Platform } from "react-native";
import { myColors } from "./color";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignContent: "center",
        backgroundColor: myColors.white
    },
    contentBox: {
        marginTop: 20,
        marginBottom: 20
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: "#fff",
    },
    textOne: {
        color: myColors.white
    },
    ContentBoxOne: {
        marginHorizontal: 52
    }
})