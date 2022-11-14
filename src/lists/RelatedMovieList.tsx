import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import { RelatedMovieItem } from '../components';
import { getRelatedMovies } from '../util';

interface Props {
    navigation: any,
    movies: any,

}

const RelatedMovieList: React.FC<Props> = ({ navigation, movies }) => {
    const [relatedMovies, setRelatedMovies] = useState<any[]>([]);

    useEffect(() => {
        getRelatedMovies(movies.id).then(movies => {
            setRelatedMovies(movies.results);
        }).catch(e => console.log(e));
    }
        , []);

    const renderItem = ({ item }: any) => (
        <RelatedMovieItem poster_path={item.poster_path} onPress={() => { navigation.push('Details', { movie: item }); }} />
    );

    if (relatedMovies.length > 0) {
        return (
            <View style={{ marginTop: 15, paddingBottom: 25 }}>
                <Text style={{ color: 'white', marginBottom: 15, fontWeight: 'bold', fontSize: 17, }}>Related Movies</Text>
                <FlatList
                    horizontal={true}
                    numColumns={1}
                    data={relatedMovies}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


        );
    } else {
        return <ActivityIndicator size={'small'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 25 }} color='white' />
    }
   
    // if (relatedMovies.length === 0) {
    //     return (<Text style={{ color: 'white' }}>Nothing to show</Text>);
    // }

}
export default RelatedMovieList;