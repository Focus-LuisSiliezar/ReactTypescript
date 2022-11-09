import React, { FC } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";


interface Props {
    placeholder: string,
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean,
}

const Input: FC<Props> = ({ placeholder, secureTextEntry, onChangeText }) => {
    return (
        <View
            style={style.container}>
            <TextInput
                style={style.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry || false}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default Input;

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: "center",
        backgroundColor: '#e3e3e',
        borderRadius: 5,
    },
    input: {
        padding: 10,
        backgroundColor: '#c8d6e5',
        color: '#222f3e',
        borderRadius: 5,
        marginBottom: 15,
    },
});