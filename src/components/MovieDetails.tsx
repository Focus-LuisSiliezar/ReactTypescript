import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

interface Props {
    movie: any,
}
const MovieDetails: React.FC<Props> = ({ movie }) => {
    console.log(movie.poster_path);
    return (
        <View>
            <Image
                style={style.image}
                source={
                    movie.poster_path ? { uri:  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` }
                        : require('../../assets/placeholder_image.png')
                }
            />
            <View style={style.infoRow}>
                <Text style={style.textColor}>{movie.original_title}</Text>
                <View style={style.ratingRow}>
                    <Text style={style.textColor}>Average Rating: </Text>
                    <Text style={style.textColor}>{movie.vote_average}</Text>
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
        marginBottom: 5,
    },
    ratingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 5,
    },
    textColor: {
        color: 'white',
    }
})