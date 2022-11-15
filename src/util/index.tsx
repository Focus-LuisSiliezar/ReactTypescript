import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../config/enviroment.json'
export const getPopularMovies = async () => {
    try {
        let response = await axios.get(
            `${config.server.movies}/3/movie/popular?api_key=${config.api_key}`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRelatedMovies = async (movie_id: number) => {
    try {
        let response = await axios.get(
            `${config.server.movies}/3/movie/${movie_id}/similar?api_key=${config.api_key}`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// export const saveFavMovies = async (movie: any) => {
//     let favMovies =[];
//     try {
//         await AsyncStorage.setItem('movieList', favMovies.push(movie));
//     } catch (e) {
//         // 
//     }
// }
export const getFavMoviesList = async () => {

}