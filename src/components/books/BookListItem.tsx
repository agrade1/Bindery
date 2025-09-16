import type { AladinBook } from '@/types/aladinTypes';

type BookListItemProps = { book: AladinBook };

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <div className="flex gap-6 border-b pb-6 last:border-0">
      <img
        src={book.cover}
        alt={book.title}
        className="h-40 w-28 shrink-0 rounded-md object-cover shadow"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="mt-2 line-clamp-2 text-sm text-gray-700">
            {book.description || '설명이 없습니다.'}
          </p>
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm">
          {book.priceSales && book.priceSales < book.priceStandard ? (
            <>
              <span className="font-bold text-emerald-700">
                {book.priceSales.toLocaleString()}원
              </span>
              <span className="text-gray-400 line-through">
                {book.priceStandard.toLocaleString()}원
              </span>
            </>
          ) : (
            <span className="font-bold text-gray-900">{book.priceStandard.toLocaleString()}원</span>
          )}
        </div>
      </div>
    </div>
  );
}
