import React from 'react';
import { Image, StyleSheet } from "react-native";


const HeaderImage: React.FC = () => {
    return (
        <Image
            style={style.image}
            source={require('../../assets/logo.png')}
        />
    );
}
export default HeaderImage;
const style = StyleSheet.create({
    image: {
        maxHeight: 25,
        maxWidth: 100,
    },
});