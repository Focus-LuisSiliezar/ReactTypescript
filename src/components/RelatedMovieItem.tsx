import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';

interface Props {
    onPress: () => void,
    uri?: string,
}

const RelatedMovieItem: React.FC<Props> = ({ onPress, uri }) => {
    return (
        <Pressable onPress={onPress}>
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