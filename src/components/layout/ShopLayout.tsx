import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { useOverlay } from '@/context/overlayContext';
import type { MenuItem } from '@/types/headerTypes';
import { BookIcon, ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react';
import { Outlet } from 'react-router-dom';

export default function ShopLayout() {
  const { isOverlay } = useOverlay();
  const menus: MenuItem[] = [
    { id: 1, to: '/books', label: 'books', Icon: BookIcon },
    { id: 2, to: '/cart', label: 'cart', Icon: ShoppingCartIcon },
    { id: 3, to: '/user', label: 'user', Icon: UserCircleIcon },
  ];
  return (
    <div className="bg-[#fffbf5]">
      <Header menus={menus} />
      <main className="cont-wrap relative z-0 min-h-dvh">
        <Outlet />
      </main>
      <Footer menus={menus} />

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${isOverlay ? 'opacity-100 delay-0 duration-300' : 'pointer-events-none opacity-0 delay-150 duration-150'} `}
      />
    </div>
  );
}
