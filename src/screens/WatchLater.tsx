import React from "react";
import { Button } from "react-native";
import { ScreenDimensions } from "../components";
import { MovieList } from "../lists";
import { useStore } from "../store";

const WatchLater: React.FC = () => {
    const movies:any = useStore((state : any) => state.movies);
    const addMovie: any = useStore((state: any) => state.addMovie);
    console.log(movies);

    return (
        <ScreenDimensions>
            <MovieList 
            movies={movies}
            navigation
            />
            <Button title="Add Item"
                onPress={() => {addMovie({
                    'id': '2323',
                    'name': 'SDS sss S'
                }) }}
            />
        </ScreenDimensions>
    );
}
export default WatchLater;