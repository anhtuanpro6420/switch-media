import React, { FC, useEffect, useState } from 'react';
import { getMoviesAPI } from 'apis/movie.api';
import { IMovie } from 'interfaces/movie.interface';
import './Movie.scss';
import Carousel from 'components/Carousel';

const Movie: FC = () => {
    const [movies, setMovies] = useState([] as Array<IMovie>);

    const fetchMovies = async () => {
        const moviesResponse: Array<IMovie> = await getMoviesAPI();
        setMovies(moviesResponse);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className='movie-page'>
            <Carousel movies={movies} />
        </div>
    );
};

export default Movie;
