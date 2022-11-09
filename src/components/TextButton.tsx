import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface Props {
    label: string,
    onPress: () => void;
}

const TextButton: FC<Props> = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.container}>
            <Text style={style.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#2e86de',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },
    label: {
        color: 'white',
        fontSize: 17,
        fontWeight: "bold",
    }
});