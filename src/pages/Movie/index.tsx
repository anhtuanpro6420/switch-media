import React, { FC, useEffect, useState } from 'react';
import { getMoviesAPI } from 'apis/movie.api';
import { IMovie } from 'interfaces/movie.interface';
import './Movie.scss';
import Carousel from 'components/Carousel';
import MovieDetail from 'components/MovieDetail';

const Movie: FC = () => {
    const [movies, setMovies] = useState([] as Array<IMovie>);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

    const fetchMovies = async () => {
        const moviesResponse: Array<IMovie> = await getMoviesAPI();
        const firstMovie: IMovie = moviesResponse[0] || null;
        setMovies(moviesResponse);
        setSelectedMovie(firstMovie);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSelectMovie = (event: React.MouseEvent, movie: IMovie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className='movie-page'>
            {selectedMovie && <MovieDetail movie={selectedMovie} />}
            <Carousel movies={movies} onSelectMovie={handleSelectMovie} />
        </div>
    );
};

export default Movie;
