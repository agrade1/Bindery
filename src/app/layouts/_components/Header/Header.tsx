import { NavLink } from 'react-router-dom';
import logoSvg from '@/assets/images/icons/Logo.svg';
import SearchInput from '@/shared/ui/SearchInput';

export default function Header() {
  return (
    <header className="flex-center bg-black h-16">
      <nav className=" max-w-[1440px] text-white">
        <div className="flex-center">
          <NavLink to="/" className="shrink-0 flex items-center gap-2">
            Bindery
          </NavLink>
          <SearchInput
            onSearch={(q) => {
              console.log('search:', q);
            }}
          />
        </div>
        <div className="flex-center"></div>
      </nav>
    </header>
  );
}
