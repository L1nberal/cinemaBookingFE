import { clsx } from 'clsx';

import './button.scss';

type TButton = {
  children: string;
  color?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  type?: 'outline' | 'contained' | 'link';
};

export const Button = ({
  children,
  color = 'default',
  type = 'contained',
}: TButton) => {
  return (
    <button className={clsx('btn-wrapper', color, type)}>{children}</button>
  );
};
