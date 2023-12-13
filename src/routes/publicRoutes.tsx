import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { DefaultLayout } from '../layouts';

const Home = lazy(() => import('../pages/home/home'));

export const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />,
      },
      {
        path: '/home',
        element: (
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        ),
      },
    ],
  },
]);
