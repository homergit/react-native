import React from "react";
import { styles } from "../styles";
import { View } from "react-native";
import { actionButtons } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export const ActionButtons = ({onPress}) => {
    return (
        <View style={styles.rowButtonContainer}>
            {
                actionButtons.map(button => {
                    const { title, type } = button;
                    return (
                        <CalcBtn
                            key={title}
                            onPress={(action) => onPress(action)}
                            title={title}
                            styleContainer={{
                                ...styles.button,
                                ...type.style
                            }}
                        />
                    )
                })
            }
        </View>
    )
};
