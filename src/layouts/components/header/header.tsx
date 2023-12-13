import { Button } from '../../../components';
import './header.scss';

export const Header = () => {
  return (
    <div className='header-wrapper h-14 bg-[#0e1428] flex justify-between px-3 items-center'>
      <div>LOGO</div>

      <ul className='flex h-full'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>Cinemas</li>
        <li className='nav-item'>News</li>
        <li className='nav-item'>Contact</li>
        <li className='nav-item'>About Us</li>
      </ul>

      <div>
        <Button type='outline'>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  );
};
