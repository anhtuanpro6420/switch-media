import React, { FC } from 'react';
import { Image } from 'antd';
import './MovieDetail.scss';
import { IMovie } from 'interfaces/movie.interface';

interface Props {
    movie: IMovie | null;
}

const MovieDetail: FC<Props> = ({ movie }) => {
    const {
        Poster,
        Title,
        Released,
        Plot,
        Rating,
        Director,
        Actors,
        Metascore,
        Votes,
    } = movie || {};
    return (
        <div className='movie-detail-container'>
            <div className='poster'>
                <Image src={Poster} className='poster-image' />
                <ul className='metadata-mobile'>
                    <li>Metascore: {Metascore}</li>
                    <li>Votes: {Votes}</li>
                </ul>
            </div>
            <div className='movie-body-container'>
                <div className='title-container'>
                    <h1 className='title'>{Title}</h1>
                </div>
                <div className='metadata-container'>
                    <ul>
                        <li>Released Date: {Released}</li>
                        <li>Plot: {Plot}</li>
                        <li>Rating: {Rating}</li>
                        <li>Director: {Director}</li>
                        <li>Actors: {Actors}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
