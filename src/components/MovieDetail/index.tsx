import React, { FC } from 'react';
import './MovieDetail.scss';
import { IMovie } from 'interfaces/movie.interface';

interface Props {
    movie: IMovie | null;
}

const MovieDetail: FC<Props> = ({ movie }) => {
    const { Title } = movie || {};
    return <div>{Title}</div>;
};

export default MovieDetail;
