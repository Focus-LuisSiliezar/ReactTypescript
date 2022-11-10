import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

interface Props {
    movie: any,
}
const MovieDetails: React.FC<Props> = ({ movie }) => {
    return (
        <View>
            <Image
                style={style.image}
                source={
                    movie.movieLink ? { uri: movie.movieLink }
                        : require('../../assets/placeholder_image.png')
                }
            />
            <View style={style.infoRow}>
                <Text style={style.textColor}>{movie.title}</Text>
                <View style={style.infoRow}>
                    <Text style={style.textColor}>Average Rating: </Text>
                    <Text style={style.textColor}>{movie.average}</Text>
                </View>

            </View>
            <Text style={style.textColor}>{movie.overview}</Text>

        </View>

    )
}
export default MovieDetails;

const style = StyleSheet.create({
    image: {
        height: 550,
        width: '100%',
        borderRadius: 5,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 3,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 5,
    },
    textColor:{
        color: 'white',
    }
})