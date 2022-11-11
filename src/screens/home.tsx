import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';
import { getPopularMovies } from '../util';

interface Props {
    navigation: any,
}
const Home: React.FC<Props> = ({ navigation }) => {
    const [popularMovies, setPopularMovies] = useState<any[]>([]);

    useEffect(() => {
        getPopularMovies().then(movies => {
            setPopularMovies(movies.results);
        }).catch(e => console.log(e));
    }, []);

    return (
        <ScreenDimensions>
            <Text style={{ color: 'white', marginVertical: 10, fontWeight: 'bold', fontSize: 21, }}>Available Movies</Text>
            <MovieList navigation={navigation} movies={popularMovies} />
        </ScreenDimensions>
    );
}
export default Home;
