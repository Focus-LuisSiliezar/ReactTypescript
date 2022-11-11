import React from 'react';
import { FlatList, View } from 'react-native'
import { MovieItem } from '../components';

interface Props {
    navigation: any,
    movies: any,
}
const MovieList: React.FC<Props> = ({ navigation,movies }) => {
    const renderItem = ({ item }: any) => (
        <MovieItem poster_path={item.poster_path} onPress={() => { navigation.navigate('Details', {movie: item }) }} />
    );

    return (
        <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />


    );

}
export default MovieList;