import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';

interface Props {
    onPress: () => void,
    poster_path?: string,
}

const RelatedMovieItem: React.FC<Props> = ({ onPress, poster_path }) => {
    return (
        <Pressable onPress={onPress}>
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
export default RelatedMovieItem;
const style = StyleSheet.create({
    cardContainer: {
        width: 150,
        height: 230,
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