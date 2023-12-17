import { useState } from 'react';
import clsx from 'clsx';

import { mockData } from '../constants';
import { MovieInfo } from './movie-info';
import '../styles/stand-out-movies.scss';

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

      <div
        className={clsx(
          'w-[65%] h-[450px] relative',
          'max-[1315px]:w-[60%] max-[900px]:w-full max-[900px]:h-[360px]'
        )}
      >
        {mockData?.map((item, index) => {
          return (
            <>
              <div
                className={clsx(
                  'hidden w-[600px] h-[350px] duration-500 absolute border-[#1a2033] border-solid border-[3px] rounded-md',
                  'max-[1315px]:w-[90%]',
                  {
                    'current-movie-slide max-[900px]:!top-[48%]':
                      index === currentSlide,
                    'next-movie-slide max-[1315px]:!hidden':
                      index === currentSlide + 1,
                    'previous-movie-slide max-[1315px]:!hidden':
                      index === currentSlide - 1,
                  }
                )}
                key={item.id}
              >
                <img
                  className='object-cover w-full h-full rounded-md'
                  src={item.poster}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
