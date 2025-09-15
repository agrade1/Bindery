import { createBrowserRouter } from 'react-router-dom';
import ShopLayout from './components/layout/ShopLayout';
import HomePage from '@/pages/HomePage';

const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <div className="p-6">Not Found</div> },
    ],
  },
]);

export default router;
