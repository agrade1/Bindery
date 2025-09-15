import { NavLink } from 'react-router-dom';
import SearchInput from '@/components/ui/SearchInput';
import { useEffect, useState } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import type { MenuItem } from '@/types/headerTypes';
import { useOverlay } from '@/context/overlayContext';
import MenuList from '../menu/MenuList';

type Props = { menus: MenuItem[] };
export default function Header({ menus }: Props) {
  const [open, setOpen] = useState(false);
  const { isOverlay, setOverlay } = useOverlay();
  const moNavOpen = () => {
    setOpen(!open);
    setOverlay(!isOverlay);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setOverlay(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setOverlay]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fffbf5] shadow-[0_4px_14px_0_#00000040]">
        <nav className="flex-between cont-wrap h-16 gap-4">
          <div className="flex-center h-full gap-7">
            <NavLink to="/" className="inline-flex items-center gap-2 text-2xl font-semibold">
              Bindery
            </NavLink>
            <div className="hidden w-60 lg:block">
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
      </header>

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-64 transform flex-col gap-2 bg-white transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} `}
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
          <MenuList menus={menus} isVertical />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${isOverlay ? 'opacity-100 delay-0 duration-300' : 'pointer-events-none opacity-0 delay-150 duration-150'} `}
        onClick={() => {
          setOpen(false);
          setOverlay(false);
        }}
      />
    </>
  );
}
