import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';

interface Props {
    onPress: () => void,
    uri?: string,
}

const MovieItem: React.FC<Props> = ({ onPress, uri }) => {
    return (
        <Pressable onPress={onPress} >
            <View style={style.cardContainer}>
                <Image
                    style={style.image}
                    source={
                        uri ? { uri: uri }
                            : require('../../assets/placeholder_image.png')
                    }
                />
            </View>
        </Pressable>
    );
}
export default MovieItem;
const style = StyleSheet.create({
    cardContainer: {
        maxWidth: 175,
        minWidth: '49.5%',
        backgroundColor: 'black',
        borderRadius: 6,
        overflow: "hidden",
        marginHorizontal: 8,

    },
    image: {
        height: 250,
        width: '100%',
    },


});