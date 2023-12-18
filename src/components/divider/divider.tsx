import clsx from 'clsx';
import { ReactNode } from 'react';

type TDivider = {
  children?: string | ReactNode;
  className?: string;
};

export const Divider = ({ children, className }: TDivider) => {
  return (
    <div className={clsx('relative text-center w-full my-3', className)}>
      <div className='content-[""] bg-[#f0edff] w-full h-[1px] absolute top-[53%] left-0'></div>
      <div className='relative z-[1] bg-white inline-block'>{children}</div>
    </div>
  );
};
