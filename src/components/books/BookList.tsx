import BookCategories from './BookCategories';
import BookListItem from './BookListItem';
import { useAladinQuery } from '@/hooks/useAladinQuery';
import type { AladinResponse } from '@/types/aladinTypes';
import { useSearchParams } from 'react-router-dom';

export default function BookList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = Number(searchParams.get('category') || 0);

  const { data, isLoading, error } = useAladinQuery<AladinResponse>(
    ['books', categoryId],
    'ItemList.aspx',
    {
      QueryType: 'Bestseller',
      CategoryId: categoryId,
      MaxResults: 20,
      SearchTarget: 'Book',
      cover: 'MidBig',
    },
  );

  return (
    <section className="grid grid-cols-[220px_1fr] gap-6">
      <BookCategories
        selectedId={categoryId}
        onSelect={(id) => setSearchParams({ category: String(id) })}
      />

      <div className="space-y-6">
        {isLoading && <p>로딩중...</p>}
        {error && <p>에러 발생</p>}
        {data?.item.map((book) => (
          <BookListItem key={book.itemId} book={book} />
        ))}
      </div>
    </section>
  );
}
