import { IoIosCloseCircle } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import clsx from 'clsx';

import { Button } from '../../../components';
import './drawer.scss';

type TDrawer = {
  drawerVisible: boolean;
  toggleDrawerVisibility: () => void;
};

export const Drawer = ({ drawerVisible, toggleDrawerVisibility }: TDrawer) => {
  return (
    <div
      className={clsx('drawer-wrapper min-[765px]:hidden', {
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
  );
};
