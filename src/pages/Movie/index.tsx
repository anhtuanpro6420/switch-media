import React, { FC, useEffect, useState } from 'react';
import { Select } from 'antd';
import { getMoviesAPI } from 'apis/movie.api';
import { IMovie } from 'interfaces/movie.interface';
import './Movie.scss';
import Carousel from 'components/Carousel';
import MovieDetail from 'components/MovieDetail';

const { Option } = Select;

const Movie: FC = () => {
    const [movies, setMovies] = useState([] as Array<IMovie>);
    const [allOrgMovies, setAllOrgMovies] = useState([] as Array<IMovie>);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [genres, setGenres] = useState<Array<string>>([]);

    const getGenres = (allMovies: Array<IMovie> = []) => {
        return Array.from(
            new Set([...allMovies.map((movie: IMovie) => movie?.Genre)])
        );
    };

    const fetchMovies = async () => {
        const moviesResponse: Array<IMovie> = await getMoviesAPI();
        const firstMovie: IMovie = moviesResponse[0] || null;
        setMovies(moviesResponse);
        setAllOrgMovies(moviesResponse);
        setSelectedMovie(firstMovie);
        const allGenres: Array<string> = getGenres(moviesResponse);
        setGenres(allGenres);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSelectMovie = (event: React.MouseEvent, movie: IMovie) => {
        setSelectedMovie(movie);
    };

    const handleSelectGenre = (selectedGenre: string) => {
        if (selectedGenre === 'all') {
            setMovies(allOrgMovies);
        } else {
            const moviesByGenre: Array<IMovie> = [...allOrgMovies].filter(
                (movie: IMovie) => movie?.Genre === selectedGenre
            );
            console.log(moviesByGenre);
            setMovies(moviesByGenre);
        }
    };

    const renderGenresSelection = () => {
        return (
            <Select
                onChange={handleSelectGenre}
                placeholder='Gender'
                className='render-selection'
            >
                <Option key='all'>All</Option>
                {genres.map((genre: string) => (
                    <Option key={genre} value={genre}>
                        {genre}
                    </Option>
                ))}
            </Select>
        );
    };

    return (
        <div className='movie-page'>
            {selectedMovie && <MovieDetail movie={selectedMovie} />}
            {genres && genres.length > 0 && (
                <div className='genres-selection-container'>
                    {renderGenresSelection()}
                </div>
            )}
            <Carousel movies={movies} onSelectMovie={handleSelectMovie} />
        </div>
    );
};

export default Movie;
