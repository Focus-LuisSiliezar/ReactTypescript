import React from 'react';
import { FlatList, View, Text } from 'react-native'
import { RelatedMovieItem } from '../components';

interface Props {
    navigation: any,
    movies: any,

}

const RelatedMovieList: React.FC<Props> = ({ navigation, movies }) => {

    const renderItem = ({ item }: any) => (
        <RelatedMovieItem poster_path={item.poster_path} onPress={() => { navigation.push('Details', { movie: item }); }} />
    );

    return (
        <View style={{ marginTop: 15, paddingBottom: 25 }}>
            <Text style={{ color: 'white', marginBottom: 15, fontWeight: 'bold', fontSize: 17, }}>Related Movies</Text>

            <FlatList
                horizontal={true}
                numColumns={1}
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>


    );

}
export default RelatedMovieList;