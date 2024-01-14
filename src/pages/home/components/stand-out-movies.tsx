import { useState } from 'react';
import clsx from 'clsx';

import { MovieInfo } from './movie-info';
import '../styles/stand-out-movies.scss';
import { Posters } from './posters';

export const StandOutMovies = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div
      className={clsx(
        'stand-out-movies-wrapper flex bg-[#0e1428]',
        'max-[900px]:flex-col'
      )}
    >
      <MovieInfo
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <Posters currentSlide={currentSlide} />
    </div>
  );
};
