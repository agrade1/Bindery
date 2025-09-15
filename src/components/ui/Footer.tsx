import type { MenuItem } from '@/types/headerTypes';
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';

type Props = { menus: MenuItem[] };
export default function Footer({ menus }: Props) {
  const sns = [
    { id: 1, label: 'Instagram', Icon: InstagramLogoIcon, href: '#' },
    { id: 2, label: 'Facebook', Icon: FacebookLogoIcon, href: '#' },
    { id: 3, label: 'Twitter', Icon: TwitterLogoIcon, href: '#' },
  ];
  return (
    <footer className="bg-[#b99c92] text-white">
      <div className="cont-wrap flex min-h-60 flex-col justify-between gap-8 py-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold">Bindery</h2>
          <p className="text-xs text-white/70">© 2024 Bindery</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
          <ul className="flex flex-col text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:flex-nowrap lg:gap-6">
            {menus.map(({ id, to, label }) => (
              <li key={id}>
                <a href={to} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {sns.map(({ id, label, Icon, href }) => (
              <a key={id} href={href} aria-label={label}>
                <Icon size={20} weight="regular" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
