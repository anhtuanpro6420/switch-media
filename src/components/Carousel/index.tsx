import React, { FC } from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import { IMovie } from 'interfaces/movie.interface';

interface Props {
    movies: Array<IMovie>;
    onSelectMovie: (event: React.MouseEvent, movie: IMovie) => void;
}

const Carousel: FC<Props> = ({ movies = [], onSelectMovie }) => {
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
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <div
                        key={Id}
                        className='slider-image'
                        onClick={(event: React.MouseEvent) =>
                            onSelectMovie(event, movie)
                        }
                        role='button'
                        tabIndex={0}
                    >
                        {Title}
                    </div>
                );
            })}
        </Slider>
    );
};

export default Carousel;
