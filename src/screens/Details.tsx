import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ScreenDimensions, MovieDetails, IconButton } from "../components";
import { RelatedMovieList } from "../lists";

interface Props {
    navigation: any,
    route: any,

}


const Details: React.FC<Props> = ({ navigation, route }) => {
    const { movie }: any = route.params;
    const [isAdded, setIsAdded] = useState(true);

    function addToList() {
        setIsAdded(true);
        console.log(isAdded);
    }

    function removeFromList() {
        setIsAdded(false);
        console.log(isAdded);
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