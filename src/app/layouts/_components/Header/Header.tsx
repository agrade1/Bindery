import { NavLink } from 'react-router-dom';
import SearchInput from '@/shared/ui/SearchInput';
import MenuList from './MenuList';
import { useState } from 'react';
import { BookIcon, ListIcon, ShoppingCartIcon, UserCircleIcon, XIcon } from '@phosphor-icons/react';
import type { MenuItem } from '@/types/headerTypes';
import { useOverlay } from '@/context/overlayContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isOverlay, setOverlay } = useOverlay();
  const moNavOpen = () => {
    setOpen(!open);
    setOverlay(!isOverlay);
  };
  const menus: MenuItem[] = [
    { id: 1, to: '/books', label: 'books', Icon: BookIcon },
    { id: 2, to: '/cart', label: 'cart', Icon: ShoppingCartIcon },
    { id: 3, to: '/user', label: 'user', Icon: UserCircleIcon },
  ];

  return (
    <header>
      <nav className="flex-between cont-wrap h-16 gap-4 border-b">
        <div className="flex-center h-full gap-4">
          <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold">
            Bindery
          </NavLink>
          <div className="hidden lg:block">
            <SearchInput
              onSearch={(q) => {
                console.log('search:', q);
              }}
            />
          </div>
        </div>
        <div className="h-full">
          <MenuList menus={menus} />

          <button
            type="button"
            className="inline-flex h-full cursor-pointer items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => moNavOpen()}
          >
            <ListIcon size={22} weight="bold" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-64 transform flex-col gap-2 bg-white shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className="flex-end h-16 border-b px-2">
          <button
            type="button"
            className="mr-4 ml-auto shrink-0 cursor-pointer rounded-md lg:hidden"
            onClick={() => moNavOpen()}
          >
            <XIcon size={22} weight="bold" />
          </button>
        </div>
        <div className="px-2">
          <MenuList menus={menus} isMobile={true} />
        </div>
      </div>
    </header>
  );
}
