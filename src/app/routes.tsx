import { createBrowserRouter } from 'react-router-dom';
import ShopLayout from './layouts/ShopLayout';
import HomePage from '@/pages/shop/ui/HomePage';

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
