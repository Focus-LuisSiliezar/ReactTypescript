import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ScreenDimensions } from '../components';
import { MovieList } from '../lists';
import { getPopularMovies } from '../util';

interface Props {
    navigation: any,
}
const Home: React.FC<Props> = ({ navigation }) => {
    const [popularMovies, setPopularMovies] = useState<any>([]);

    useEffect(() => {
        getPopularMovies().then(movies => {
            setPopularMovies(movies.results);
        }).catch(e => console.log(e));
    }, []);

    if (popularMovies.length > 0) {
        return (
            <ScreenDimensions>
                <Text style={{ color: 'white', marginVertical: 10, fontWeight: 'bold', fontSize: 21, }}>Popular Movies</Text>
                <MovieList navigation={navigation} movies={popularMovies} />
            </ScreenDimensions>
        );
    } else {
        return <ActivityIndicator size={'large'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} color='white' />
    }

    // if (popularMovies.length == 0) {
    //     return (<Text style={{ color: 'white' }}>Nothing to show</Text>);
    // }

}
export default Home;
