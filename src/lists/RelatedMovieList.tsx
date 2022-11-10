import React from 'react';
import { FlatList, View, Text } from 'react-native'
import MOVIES from '../../assets/data';
import { RelatedMovieItem } from '../components';

interface Props {
    navigation: any,
}

const RelatedMovieList: React.FC<Props> = ({ navigation }) => {

    const renderItem = ({ item }: any) => (
        <RelatedMovieItem uri={item.movieLink} onPress={() => { navigation.navigate('Home'); }} />
    );

    return (
        <View style={{marginTop: 15,paddingBottom: 25}}>
            <Text style={{ color: 'white', marginBottom: 15, fontWeight: 'bold', fontSize: 17, }}>Related Movies</Text>

            <FlatList
                horizontal={true}
                numColumns={1}
                data={MOVIES}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>


    );

}
export default RelatedMovieList;