import { useState } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser, FaLanguage, FaCloudMoon, FaSun } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../components';
import logo from '../../../assets/cinema-logo.png';
import { urls } from '../../../routes/urls';
import './header.scss';
import { Drawer } from './drawer';
import { LanguageMenu } from './language-menu';

export const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isDark] = useState(false);

  const { t } = useTranslation();

  const location = useLocation();

  const pathname = () => {
    const str = location.pathname.slice(1);
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const toggleDrawerVisibility = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className='header-wrapper h-14 bg-[#0e1428] flex justify-between px-3 items-center px-10'>
      <img className='w-16' src={logo} />

      <ul className='flex h-full max-[764px]:hidden'>
        <li
          className={clsx('nav-item', {
            '!text-[#7f00ce]': pathname() === 'Home',
          })}
        >
          {t('home')}
        </li>
        <li
          className={clsx('nav-item', {
            '!text-[#7f00ce]': pathname() === 'Cinemas',
          })}
        >
          {t('cinemas')}
        </li>
        <li
          className={clsx('nav-item', {
            '!text-[#7f00ce]': pathname() === 'News',
          })}
        >
          {t('news')}
        </li>
        <li
          className={clsx('nav-item', {
            '!text-[#7f00ce]': pathname() === 'Contact',
          })}
        >
          {t('contact')}
        </li>
        <li
          className={clsx('nav-item', {
            '!text-[#7f00ce]': pathname() === 'About',
          })}
        >
          {t('about')}
        </li>
      </ul>

      <div className='flex items-center'>
        <Button size='small' color='white'>
          {!isDark ? <FaCloudMoon /> : <FaSun />}
        </Button>

        <div className='multi-language-container relative'>
          <Button className=' flex items-center' color='white' variant='link'>
            <span className='text-2xl'>
              <FaLanguage />
            </span>
            <IoIosArrowDown />
          </Button>

          <LanguageMenu />
        </div>

        <Button
          className='max-[764px]:hidden !ml-0'
          color='white'
          variant='link'
          to={urls.login}
        >
          <FaUser />
        </Button>
      </div>

      <Button
        className='min-[765px]:hidden'
        callbackFC={toggleDrawerVisibility}
      >
        <GiHamburgerMenu />
      </Button>

      <div
        className={clsx(
          'absolute top-0 left-0 w-full h-full bg-black opacity-40 cursor-pointer z-[9999]',
          {
            hidden: !drawerVisible,
          }
        )}
        onClick={toggleDrawerVisibility}
      />

      <Drawer
        drawerVisible={drawerVisible}
        toggleDrawerVisibility={toggleDrawerVisibility}
      />
    </div>
  );
};
