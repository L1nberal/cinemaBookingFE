import { useState } from 'react';
import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import {
  FaUserCircle,
  FaUser,
  FaLanguage,
  FaCloudMoon,
  FaSun,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '../../../components';
import logo from '../../../assets/cinema-logo.png';
import { urls } from '../../../routes/urls';
import './header.scss';

export const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isDark] = useState(false);

  const toggleDrawerVisibility = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className='header-wrapper h-14 bg-[#0e1428] flex justify-between px-3 items-center'>
      <img className='w-16' src={logo} />

      <ul className='flex h-full max-[764px]:hidden'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>Cinemas</li>
        <li className='nav-item'>News</li>
        <li className='nav-item'>Contact</li>
        <li className='nav-item'>About Us</li>
      </ul>

      <div className='flex items-center'>
        <Button size='small' color='white'>
          {!isDark ? <FaCloudMoon /> : <FaSun />}
        </Button>
        <Button className='flex items-center' color='white' variant='link'>
          <span className='text-2xl'>
            <FaLanguage />
          </span>
          <IoIosArrowDown />
        </Button>

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

      <span
        className={clsx(
          'absolute top-0 left-0 w-full h-full bg-black opacity-40 cursor-pointer',
          {
            hidden: !drawerVisible,
          }
        )}
        onClick={toggleDrawerVisibility}
      />

      <div
        className={clsx('drawer min-[765px]:hidden', {
          '!right-0': drawerVisible,
        })}
      >
        <Button
          className='text-xl'
          variant='link'
          color='white'
          callbackFC={toggleDrawerVisibility}
        >
          <IoIosCloseCircle />
        </Button>

        <div className='flex flex-col items-center gap-3 my-5'>
          <div className='text-5xl text-white'>
            <FaUserCircle />
          </div>

          <div>
            <Button color='info' variant='link'>
              Login
            </Button>
            <Button color='success' variant='link'>
              Signup
            </Button>
          </div>
        </div>

        <ul className='nav-list flex flex-col'>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Cinemas</li>
          <li className='nav-item'>News</li>
          <li className='nav-item'>Contact</li>
          <li className='nav-item'>About Us</li>
        </ul>
      </div>
    </div>
  );
};
