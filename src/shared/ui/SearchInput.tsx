import { useState, type FormEvent } from 'react';

type Props = {
  onSearch: (q: string) => void;
  placeholder?: string;
};

export default function SearchInput({ onSearch, placeholder = 'Search products…' }: Props) {
  const [q, setQ] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (!v) return;
    onSearch(v);
  };

  return (
    <form onSubmit={submit} className="relative">
      <input
        className="input w-full pl-9"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        🔎
      </span>
      <img src="" alt="" />
    </form>
  );
}
