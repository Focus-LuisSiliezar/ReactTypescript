import React from 'react';
import { FlatList, View } from 'react-native'
import MOVIES from '../../assets/data';
import { MovieItem } from '../components';

interface Props {
    navigation: any,
}
const MovieList: React.FC<Props> = ({ navigation }) => {

    const renderItem = ({ item }: any) => (
        <MovieItem uri={item.movieLink} onPress={() => { navigation.navigate('Details', {movie: item }) }} />
    );

    return (
        <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />


    );

}
export default MovieList;