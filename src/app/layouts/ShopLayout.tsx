import Footer from '@/app/layouts/_components/Footer/Footer';
import Header from '@/app/layouts/_components/Header/Header';
import { useOverlay } from '@/context/overlayContext';
import { Outlet } from 'react-router-dom';

export default function ShopLayout() {
  const { isOverlay } = useOverlay();

  return (
    <div>
      <Header />
      <main className="cont-wrap relative z-0">
        <Outlet />
      </main>
      <Footer />

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${isOverlay ? 'opacity-100 delay-0 duration-300' : 'pointer-events-none opacity-0 delay-150 duration-150'} `}
      />
    </div>
  );
}
