import { FormEvent } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa6';
import { IoIosReturnLeft } from 'react-icons/io';

import clsx from 'clsx';

import { Button, Divider, Input } from '../../../components';
import gmailIcon from '../../../assets/Gmail_icon.svg.webp';
import cinemaCityImage from '../../../assets/Cinema_City.svg.png';
import cinemaProductImage from '../../../assets/Cinema-Product-Photo.webp';
import { urls } from '../../../routes/urls';

import './login.scss';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { t } = useTranslation();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const [identifier, password] = formData.values();

    const userInfo = {
      identifier,
      password,
    };

    console.log(userInfo);
  };

  return (
    <div className='login-wrapper min-h-screen flex justify-center items-center'>
      <Button
        className='fixed top-2 left-2 flex items-center gap-1'
        size='small'
        to={urls.home}
      >
        <IoIosReturnLeft className='text-lg' />
        {t('back')}
      </Button>

      <div
        className={clsx(
          'basis-[1000px] flex mx-5',
          'max-[1000px]:justify-center'
        )}
      >
        <div
          className={clsx(
            'bg-white h-[550px] flex-1 rounded-l-2xl flex justify-center items-center',
            'max-[1000px]:flex-[0.5] max-[1000px]:rounded-r-2xl max-[1000px]:px-5 max-[450px]:flex-1'
          )}
        >
          <form
            onSubmit={handleLogin}
            className={clsx('w-[364px]', ' max-[450px]:w-full')}
          >
            <h1 className='text-2xl font-bold uppercase text-center mb-[10px]'>
              {t('login')}
            </h1>
            <h2 className='text-base font-normal text-[#525252] text-center mb-6 capitalize'>
              {t('accountExisting')}
              <Button
                className='capitalize'
                size='small'
                variant='link'
                color='info'
                to={urls.signup}
              >
                {t('no')}
              </Button>
            </h2>

            <Input
              className='mb-[18px]'
              name='identifier'
              type='text'
              icon={<FaRegUser />}
              placeholder={`${t('username')} ${t('or')} email`}
            />

            <Input
              className='mb-6'
              name='password'
              type='password'
              icon={<RiLockPasswordLine />}
              placeholder={t('password')}
            />

            <Button
              className='block mx-auto mb-[18px] capitalize'
              color='info'
              type='submit'
            >
              {t('loginNow')}
            </Button>

            <Divider>
              <div className='text-base text-center capitalize'>
                <span className='font-bold '>{t('login')}</span>{' '}
                {t('withOthers')}
              </div>
            </Divider>

            <div className='flex justify-center mt-5'>
              <Button
                className={clsx(
                  'rotate-parent rounded-full text-3xl w-[50px] h-[50px] border-[2px]',
                  'before:duration-1000 hover:before:bg-gradient-to-t hover:before:from-purple-400 hover:before:to-pink-400'
                )}
                variant='outline'
              >
                <img className='rotate-y' src={gmailIcon} />
              </Button>

              <Button
                className={clsx(
                  'rotate-parent rounded-full text-[28px] w-[50px] h-[50px] border-[2px] text-center px-[9px]',
                  'before:duration-1000 hover:before:bg-gradient-to-t hover:before:from-sky-300 hover:before:to-indigo-400'
                )}
                variant='outline'
              >
                <FaFacebookF className='rotate-y text-[#0866ff]' />
              </Button>
            </div>
          </form>
        </div>

        <div
          className={clsx(
            'bg-gradient-to-r from-[#9181f4] to-[#5038ed] flex-1 rounded-r-2xl flex flex-col justify-center items-center',
            'max-[1000px]:hidden'
          )}
        >
          <img className='w-[400px]' src={cinemaCityImage} />
          <img className='w-[250px]' src={cinemaProductImage} />
        </div>
      </div>
    </div>
  );
};
