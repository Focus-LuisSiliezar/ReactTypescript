import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';

interface Props {
    navigation: any,
}
const Home: React.FC<Props> = ({ navigation }) => {

    useFocusEffect(() => {
        navigation.setOptions({
            // headerLeft: () => <Text style={{ color: 'white' }}>drawer</Text>,
            headerRight: () => <Text style={{ color: 'white' }}>go to search</Text>
        });
    });

    return (
        <ScreenDimensions>
            <Text style={{ color: 'white', marginBottom: 5, marginTop: 10, fontWeight: 'bold', fontSize: 21, }}>Available Movies</Text>
            <MovieList navigation={navigation} />
        </ScreenDimensions>
    );
}
export default Home;
