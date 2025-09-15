import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useState, type FormEvent } from 'react';

type Props = {
  onSearch: (q: string) => void;
  placeholder?: string;
};

export default function SearchInput({ onSearch, placeholder = '' }: Props) {
  const [q, setQ] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (!v) return;
    onSearch(v);
  };

  return (
    <form onSubmit={submit} className="relative w-full max-w-lg">
      <input
        className="w-full rounded-md bg-[#f4f1ea] py-3 pr-4 pl-10 text-sm text-gray-700 placeholder-gray-400 transition outline-none focus:bg-white focus:ring-2 focus:ring-[#c73230]"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      <MagnifyingGlassIcon
        size={20}
        weight="light"
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
      />
    </form>
  );
}
