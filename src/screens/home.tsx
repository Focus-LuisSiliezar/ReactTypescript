import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';

const Home: FC = () => {
    return (
        <ScreenDimensions>
            <Text style={{ color: 'white', paddingBottom: 15, marginTop: 10, fontWeight: 'bold', fontSize: 21, }}>Available Movies</Text>
            <MovieList />
        </ScreenDimensions>
    );
}
export default Home;
