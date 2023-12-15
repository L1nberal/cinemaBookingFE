import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { publicRoutes } from './routes/publicRoutes';

const router = publicRoutes;

function App() {
  return (
    <Suspense fallback='...loading'>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
