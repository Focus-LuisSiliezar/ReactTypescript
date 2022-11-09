import React from 'react';
import { FlatList, View, ListRenderItem, } from 'react-native'
import { MovieItem } from '../components';
const MOVIES = [
    {
        'id': '1',
        'movieLink': 'Link'
    },
    {
        'id': '2',
        'movieLink': 'Link'
    },
    {
        'id': '3',
        'movieLink': 'Link'
    },
    {
        'id': '4',
        'movieLink': 'Link'
    },
    {
        'id': '5',
        'movieLink': 'Link'
    },
    {
        'id': '6',
        'movieLink': 'Link'
    },
    {
        'id': '7',
        'movieLink': 'Link'
    },
    {
        'id': '8',
        'movieLink': 'Link'
    },
    {
        'id': '9',
        'movieLink': 'Link'
    },
    {
        'id': '10',
        'movieLink': 'Link'
    },
];
const renderItem = ({ item }: any) => (
    < MovieItem onPress={() => { console.log(item) }} />
);


const MovieList: React.FC = () => {
    return (

        <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            // showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            style={{flex:1}}
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );

}
export default MovieList;