import Footer from '@/app/layouts/_components/Footer/Footer';
import Header from '@/app/layouts/_components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function ShopLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-[1440px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
