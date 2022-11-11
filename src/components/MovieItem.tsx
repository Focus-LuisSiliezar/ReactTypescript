import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';

interface Props {
    onPress: () => void,
    poster_path?: string,
}

const MovieItem: React.FC<Props> = ({ onPress, poster_path }) => {
    return (
        <Pressable onPress={onPress} >
            <View style={style.cardContainer}>
                <Image
                    style={style.image}
                    source={
                        poster_path ? { uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}` }
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