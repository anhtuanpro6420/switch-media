import React, { FC, useEffect, useState } from 'react';
import { getMoviesAPI } from 'apis/movie.api';
import { IMovie } from 'interfaces/movie.interface';
import './Movie.scss';

const Movie: FC = () => {
    const [movies, setMovies] = useState([] as Array<IMovie>);

    const fetchMovies = async () => {
        const moviesResponse: Array<IMovie> = await getMoviesAPI();
        setMovies(moviesResponse);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return <div>Movie</div>;
};

export default Movie;
