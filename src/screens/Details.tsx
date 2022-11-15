import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { ScreenDimensions, MovieDetails, IconButton } from "../components";
import { RelatedMovieList } from "../lists";
import { movieStore } from "../store";

interface Props {
    navigation: any,
    route: any,

}


const Details: React.FC<Props> = ({ navigation, route }) => {
    const { movie }: any = route.params;
    const movies: any = movieStore((state: any) => state.movies);
    const addMovies: any = movieStore((state: any) => state.addMovie);
    const removeMovie: any = movieStore((state: any) => state.removeMovie);

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        isMovieAdded();
    }, [isAdded]);

    function isMovieAdded() {
        const exists = movies.findIndex((e: any) => e.id == movie.id);
        console.log(exists);
        if (exists != -1) {
            setIsAdded(true);
        } else {
            setIsAdded(false);
        }
    }

    function addToList() {
        setIsAdded(!isAdded);
        addMovies(movie);
    }

    function removeFromList() {
        setIsAdded(!isAdded);
        removeMovie(movie.id);
    }

    useFocusEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (isAdded) {
                    return <IconButton iconName="ri-star-fill" iconColor="orange" onPress={removeFromList} />
                }
                else {
                    return <IconButton iconName="ri-star-line" iconColor="white" onPress={addToList} />
                }

            }
        });
    });

    return (
        <ScrollView>
            <ScreenDimensions>
                <MovieDetails movie={movie} />
                <RelatedMovieList navigation={navigation} movies={movie} />
            </ScreenDimensions>
        </ScrollView>

    );
}
export default Details;