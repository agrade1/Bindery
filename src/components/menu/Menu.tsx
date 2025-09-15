import { NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';

type MenuProps = {
  to: string;
  children: ReactNode;
};

export default function Menu({ to, children }: MenuProps) {
  return (
    <li className="w-full">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `inline-flex w-full items-center gap-2 rounded-md p-4 text-sm font-medium transition ${isActive ? 'bg-[#b99c92] text-white' : 'text-slate-600 hover:bg-slate-400 hover:text-slate-900'}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
