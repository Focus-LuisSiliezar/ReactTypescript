import React from 'react';
import { Text } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';

interface Props {
    navigation: {},
}
const Home: React.FC<Props> = ({ navigation }) => {
    return (
        <ScreenDimensions>
            <Text style={{ color: 'white', paddingBottom: 15, marginTop: 10, fontWeight: 'bold', fontSize: 21, }}>Available Movies</Text>
            <MovieList navigation={navigation} />
        </ScreenDimensions>
    );
}
export default Home;
