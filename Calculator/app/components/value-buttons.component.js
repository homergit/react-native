import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { buttonsView } from "../constants/buttons";
import { CalcBtn } from "./calc-btn.component";

export const ButtonsView = ({onPress, hex}) => {
    return (
        <>
            {
                buttonsView.map((row, id) => {
                    return (
                        <View key={id} style={styles.rowButtonContainer}>
                            {
                                row.map(button => {
                                    const { title, type } = button;
                                    return (
                                        <CalcBtn
                                            key={title}
                                            onPress={(value) => onPress(value)}
                                            title={title}
                                            styleContainer={styles.button}
                                            disabled={ type.canDisable ? !hex : false }
                                        />
                                    )
                                })
                            }
                        </View>
                    );
                })
            }
        </>
    )
};
