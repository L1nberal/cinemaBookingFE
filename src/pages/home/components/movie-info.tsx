import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { TbTicket } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { GoDot, GoDotFill } from 'react-icons/go';

import { mockData } from '../constants';
import { Button } from '../../../components';
import '../styles/movie-info.scss';

type TMovieInfo = {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
};

export const MovieInfo = ({ currentSlide, setCurrentSlide }: TMovieInfo) => {
  const { t } = useTranslation();

  const handleTurnSlideRight = () => {
    if (currentSlide < mockData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleTurnSlideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={clsx(
        'movie-info-wrapper w-[35%] h-[450px] relative overflow-hidden',
        'max-[1315px]:w-[40%] max-[900px]:w-full max-[900px]:h-[370px]'
      )}
    >
      {mockData?.map((item, index) => {
        return (
          <div
            key={item.id}
            className={clsx(
              'hidden absolute top-6 w-[90%] duration-500',
              'max-[900px]:top-4',
              {
                'current-movie-info': index === currentSlide,
                'next-movie-info': index === currentSlide + 1,
                'previous-movie-info': index === currentSlide - 1,
              }
            )}
          >
            <h4 className='whitespace-nowrap overflow-hidden text-ellipsis'>
              {item?.genres.map((genre, index) => (
                <span
                  className={clsx(
                    'genre text-[#6b03b0] capitalize text-[15px] font-semibold'
                  )}
                  key={index}
                >
                  {genre}
                </span>
              ))}
            </h4>

            <h1 className='text-white text-5xl uppercase font-bold mt-[15px] mb-[10px] w-full whitespace-nowrap overflow-hidden text-ellipsis'>
              {item?.title}
            </h1>

            <h2 className='text-[#c7cad6] text-3xl uppercase font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>
              {item?.subTitle}
            </h2>

            <p
              className={clsx(
                'text-[#545866] text-[15px] font-medium first-letter:uppercase mt-[15px] mb-[25px] h-[112px] line-clamp-5',
                'max-[900px]:h-[70px]'
              )}
            >
              {item?.description}
            </p>

            <div className='flex'>
              <Button className='flex items-center bg-[#7024b9] hover:bg-[#872bdf] active:bg-[#6821ac] rounded-full text-[#e0d0f0]'>
                <span className='text-lg mr-1'>
                  <TbTicket />
                </span>
                <span className='first-letter:capitalize'>
                  {t('getTickets')}
                </span>
              </Button>

              <Button
                className='text-[#747883] first-letter:capitalize'
                variant='link'
              >
                {t('seeDetails')}
              </Button>
            </div>
          </div>
        );
      })}

      <div
        className={clsx(
          'absolute bottom-5 w-[90%] left-[50%] translate-x-[-50%]',
          'max-[900px]:bottom-2'
        )}
      >
        <Button
          className='w-10 h-10 rounded-full bg-transparent hover:bg-[#1d163e] active:bg-[#130e30] border-[#191e31] border-[1px] border-solid'
          callbackFC={handleTurnSlideLeft}
        >
          <FaAngleLeft />
        </Button>

        {mockData?.map((item, index) => (
          <Button
            key={item.id}
            size='small'
            variant='link'
            color='white'
            callbackFC={() => handleIndicatorClick(index)}
          >
            {index === currentSlide ? <GoDotFill /> : <GoDot />}
          </Button>
        ))}

        <Button
          className='w-10 h-10 rounded-full bg-transparent hover:bg-[#1d163e] active:bg-[#130e30] border-[#191e31] border-[1px] border-solid'
          callbackFC={handleTurnSlideRight}
        >
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
};
