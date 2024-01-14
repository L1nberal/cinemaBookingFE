import { useState } from 'react';
import clsx from 'clsx';
import { BiSolidRightArrow } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';

import { mockData } from '../constants';
import { Button } from '../../../components';
import '../styles/posters.scss';

type TPosters = {
  currentSlide: number;
};

export const Posters = ({ currentSlide }: TPosters) => {
  const [openedTrailer, setOpenedtrailer] = useState<string>('');

  const handleOpenTrailer = (movieId: string) => {
    setOpenedtrailer(movieId);
  };

  const handleCloseTrailer = (movieId: string) => {
    setOpenedtrailer('');

    const iframe = document.getElementById(movieId) as HTMLIFrameElement;

    iframe.contentWindow?.postMessage(
      '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
      '*'
    );
  };

  return (
    <>
      <div
        className={clsx(
          'posters-wrapper w-[65%] h-[450px] relative',
          'max-[1315px]:w-[60%] max-[900px]:w-full max-[900px]:h-[360px]'
        )}
      >
        {mockData?.map((item, index) => {
          return (
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

              <Button
                className='play-btn absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-10 h-10'
                color='white'
                callbackFC={() => handleOpenTrailer(item.id)}
              >
                <BiSolidRightArrow className='text-[#7024b9]' />
              </Button>
            </div>
          );
        })}
      </div>

      {mockData?.map((item) => {
        return (
          <div
            className={clsx(
              'hidden absolute z-40 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full justify-center',
              {
                '!flex': openedTrailer === item.id,
              }
            )}
            key={item.id}
          >
            <Button
              className='absolute top-[-45px] right-0'
              variant='link'
              color='white'
              callbackFC={() => handleCloseTrailer(item.id)}
            >
              <IoCloseCircle className='text-3xl' />
            </Button>

            <iframe
              id={item.id}
              className={clsx(
                'w-[800px] h-[450px] relative',
                'max-[900px]:flex-[0.8] max-[900px]:h-[300px] max-[600px]:flex-1 max-[600px]:h-[250px] max-[450px]:h-[200px]'
              )}
              src={item.trailer + '&enablejsapi=1'}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        );
      })}

      <div
        className={clsx(
          'hidden absolute top-0 left-0 w-full min-h-screen bg-black opacity-40 z-30',
          { '!block': openedTrailer }
        )}
      />
    </>
  );
};
