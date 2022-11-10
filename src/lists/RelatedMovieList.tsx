import React from 'react';
import { FlatList, View } from 'react-native'
import { RelatedMovieItem } from '../components';
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
    <RelatedMovieItem onPress={() => { console.log(item) }} />
);

const RelatedMovieList: React.FC = () => {
    return (
        <FlatList
            horizontal={true}
            numColumns={1}
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );

}
export default RelatedMovieList;