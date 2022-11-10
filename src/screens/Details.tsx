import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Text, ScrollView } from "react-native";
import { ScreenDimensions, MovieDetails, IconButton } from "../components";
import { RelatedMovieList } from "../lists";

interface Props {
    navigation: any,
    route: any,

}
const Details: React.FC<Props> = ({ navigation, route }) => {
    const { movie }: any = route.params;

    useFocusEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton iconName="ri-star-line" iconColor="white" onPress={()=>{}}/>
        });
    });

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