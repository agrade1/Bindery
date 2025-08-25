import type { MenuItem } from '@/types/headerTypes';
import Menu from './Menu';

type Props = { menus: MenuItem[]; isMobile?: boolean };

export default function MenuList({ menus, isMobile }: Props) {
  return (
    <ul
      className={`h-full items-center gap-1 ${isMobile ? 'flex flex-col md:hidden' : 'hidden md:flex'} `}
    >
      {menus.map(({ id, to, label, Icon }) => (
        <Menu key={id} to={to}>
          <Icon size={18} weight="light" />
          <span className={`${isMobile ? '' : 'hidden'}`}>{label}</span>
        </Menu>
      ))}
    </ul>
  );
}
