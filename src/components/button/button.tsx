import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

import './button.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type TButton = {
  children: string | ReactNode;
  color?:
    | 'default'
    | 'primary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'secondary'
    | 'success'
    | 'white';
  variant?: 'outline' | 'contained' | 'link';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  to?: string;
  href?: string;
  callbackFC?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = 'default',
  variant = 'contained',
  size = 'medium',
  className,
  to,
  href,
  callbackFC,
  ...props
}: TButton) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    }

    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <button
      className={clsx('btn', color, variant, size, className)}
      onClick={callbackFC ?? handleNavigate}
      {...props}
    >
      {children}
    </button>
  );
};
