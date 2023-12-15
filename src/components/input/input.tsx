import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Button } from '../button';

type TInput = {
  className?: string;
  icon?: ReactNode;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, icon, type = 'text', ...props }: TInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={clsx(
        'flex items-center h-[52px] bg-[#f3f1ff] px-1 py-3 rounded-xl',
        className
      )}
    >
      <span className={clsx('text-base mr-1', { 'ml-4': icon })}>{icon}</span>
      <input
        className='w-full bg-transparent text-xs font-normal outline-none'
        type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
        {...props}
      />
      {type === 'password' && (
        <Button
          className='p-0 text-lg'
          type='button'
          variant='link'
          callbackFC={toggleVisibility}
        >
          {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
        </Button>
      )}
    </div>
  );
};
