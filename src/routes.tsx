import { createBrowserRouter } from 'react-router-dom';
import ShopLayout from './components/layout/ShopLayout';
import HomePage from '@/pages/HomePage';
import BooksPage from './pages/BooksPage';

const router = createBrowserRouter([
  {
    element: <ShopLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/books', element: <BooksPage /> },
      { path: '*', element: <div className="p-6">Not Found</div> },
    ],
  },
]);

export default router;
