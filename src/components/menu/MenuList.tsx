import type { MenuItem } from '@/types/headerTypes';
import Menu from './Menu';

type MenuListProps = { menus: MenuItem[]; isVertical?: boolean };

export default function MenuList({ menus, isVertical }: MenuListProps) {
  return (
    <ul
      className={`h-full items-center gap-1 ${isVertical ? 'flex flex-col md:hidden' : 'hidden md:flex'} `}
    >
      {menus.map(({ id, to, label, Icon }) => (
        <Menu key={id} to={to}>
          <Icon size={18} weight="light" />
          <span className={`${isVertical ? '' : 'hidden'}`}>{label}</span>
        </Menu>
      ))}
    </ul>
  );
}
