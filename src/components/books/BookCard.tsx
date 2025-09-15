import type { AladinBook } from '@/types/aladinTypes';
import { NavLink } from 'react-router-dom';

type BookCardProps = { book: AladinBook };

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex-center w-full flex-col">
      <div className="h-80">
        <NavLink to={'/'} className="flex h-full pb-1.5">
          <img src={book.cover} alt={book.title} className="mt-auto rounded-md object-cover" />
        </NavLink>
      </div>
      <div className="w-2/3">
        <h3 className="mt-2 line-clamp-1 text-sm font-semibold">{book.title}</h3>
        <p className="text-xs text-gray-500">{book.author}</p>
        <p className="text-xs text-gray-400">{book.pubDate}</p>
      </div>
    </div>
  );
}
