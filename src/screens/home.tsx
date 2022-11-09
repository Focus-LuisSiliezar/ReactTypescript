import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';

const Home: FC = () => {
    return (
        <ScreenDimensions>
            <MovieList />
        </ScreenDimensions>
    );
}
export default Home;
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});