import React, { FC } from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import { IMovie } from 'interfaces/movie.interface';

interface Props {
    movies: Array<IMovie>;
}

const Carousel: FC<Props> = ({ movies = [] }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        className: 'slides',
    };

    return (
        <Slider {...settings}>
            {movies.map((movie: IMovie) => {
                const { Title, Id } = movie || {};
                return (
                    <div key={Id} className='slider-image'>
                        {Title}
                    </div>
                );
            })}
        </Slider>
    );
};

export default Carousel;
