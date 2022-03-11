import { IMovie } from 'interfaces/movie.interface';
import axios from '../axios-instance';

const getMoviesAPI = async (): Promise<Array<IMovie>> => {
    const { data: movies = [] }: { data: Array<IMovie> } = await axios.get(
        '/d03e0886-f5c8-4961-902d-51bfe8059a33'
    );
    return movies;
};

export { getMoviesAPI };
