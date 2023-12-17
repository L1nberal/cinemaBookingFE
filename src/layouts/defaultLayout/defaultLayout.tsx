import { ReactNode } from 'react';
import clsx from 'clsx';

import { Header } from '../components';

type TDefaultLayout = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: TDefaultLayout) => {
  return (
    <div>
      <Header />

      <div className={clsx('px-10', 'max-[480px]:px-3')}>{children}</div>
    </div>
  );
};
