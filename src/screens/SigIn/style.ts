import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        paddingBottom: 15
    },

    image: {
        width: '100%',
        height: 360,

    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.reading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subtitle:{
        color: theme.colors.reading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64
    }
});