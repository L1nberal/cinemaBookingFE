import { ReactNode } from 'react';
import { Header } from '../components';

type TDefaultLayout = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: TDefaultLayout) => {
  return (
    <div>
      <Header />

      <div>{children}</div>
    </div>
  );
};
