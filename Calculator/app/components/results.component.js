import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles";

export const Results = ({result, calculatorActions, currentNumber, hex}) => {
    return (
        <View>
            <Text style={styles.textStyle}>Result:</Text>
            <TextInput
                style={styles.inputStyle}
                value={result}
            />
            <Text style={styles.textStyle}>All actions:</Text>
            <TextInput
                style={styles.inputStyle}
                value={calculatorActions}
            />
            <Text style={styles.textStyle}>Current number:</Text>
            <TextInput
                style={styles.inputStyle}
                value={hex
                    ? `0x${currentNumber}`
                    : currentNumber
                }
            />
        </View>
    )
};
