import { StyleSheet } from "react-native";

export const colors = {
    RED: 'red',
    BLACK: 'black',
    GREY: 'grey',
    CONTAINER_MAIN: '#f1e2c1',
    INPUT_BACKGROUND: '#c9ffbc',
    BUTTON_BG: '#cde0ff'
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.CONTAINER_MAIN
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        marginLeft: 5
    },
    inputStyle: {
        backgroundColor: colors.INPUT_BACKGROUND,
        fontSize: 18,
        paddingVertical: 1,
        paddingHorizontal: 5
    },
    buttonsContainer: {
        borderColor: colors.BLACK,
        borderWidth: 1,
    },
    switchStyle: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
    },
    button: {
        width: 55,
        height: 55,
        borderColor: colors.BLACK,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.BUTTON_BG,
    },
    controlsContainer: {
      flexDirection: 'row'
    },
    rowButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 5,
    }
});

