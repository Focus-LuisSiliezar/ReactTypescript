import React from "react";
import { ScreenDimensions } from "../components";
import { MovieList } from "../lists";
import { movieStore } from "../store";

interface Props {
    navigation: any,
}

const WatchLater: React.FC<Props> = ({ navigation }) => {
    const movies: any = movieStore((state: any) => state.movies);


    return (
        <ScreenDimensions>
            <MovieList
                movies={movies}
                navigation={navigation}
            />
        </ScreenDimensions>
    );
}
export default WatchLater;