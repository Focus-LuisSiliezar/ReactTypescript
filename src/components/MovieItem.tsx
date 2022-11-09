import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    onPress: () => void,
    uri?: string,
}

const MovieItem: React.FC<Props> = ({ onPress, uri }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.cardContainer}>
                <Image
                    style={style.image}
                    source={
                        uri ? { uri: uri }
                            : require('../../assets/placeholder_image.png')
                    }
                />
            </View>
        </TouchableOpacity>
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