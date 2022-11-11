import axios from 'axios';
import config from '../config/enviroment.json'
export const getPopularMovies = async () => {
    let response = await axios.get(
        `${config.server.movies}/3/movie/popular?api_key=${config.api_key}`,
    );
    return response.data;
    // try {
      
    // } catch (error) {
    //     console.log(error);r
    // }
}