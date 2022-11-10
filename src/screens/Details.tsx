import React from "react";
import { Text, ScrollView } from "react-native";
import { ScreenDimensions, MovieDetails } from "../components";
import { RelatedMovieList } from "../lists";

interface Props {
    navigation: any,
    route: any,

}
const Details: React.FC<Props> = ({ navigation, route }) => {
    const { movie }: any = route.params;
    console.log('ITEM ' + movie);
    return (
        <ScrollView>
            <ScreenDimensions>
                <MovieDetails movie={movie} />
                <RelatedMovieList navigation={navigation} />
            </ScreenDimensions>
        </ScrollView>

    );
}
export default Details;