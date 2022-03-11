import React, { FC } from 'react';
import { Image } from 'antd';
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
        <Slider {...settings} className='slider-container'>
            {movies.map((movie: IMovie) => {
                const { Poster, Id } = movie || {};
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
                        <Image
                            src={Poster}
                            className='poster-image'
                            preview={false}
                        />
                    </div>
                );
            })}
        </Slider>
    );
};

export default Carousel;
