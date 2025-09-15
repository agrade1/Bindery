import MonetImage from '@/assets/images/woman_with_a_parasol_monet.webp';
import { useAladinQuery } from '@/hooks/useAladinQuery';
import type { AladinBook, AladinResponse } from '@/types/aladinTypes';
import { NavLink } from 'react-router-dom';

export default function HeroBanner() {
  // 1. 세계문학전집 카테고리에서 책 불러오기
  const { data, isLoading } = useAladinQuery<AladinResponse>(
    ['hero-books'],
    'ItemSearch.aspx',
    {
      Query: '세계문학전집',
      CategoryId: 4041, // 세계문학전집
      MaxResults: 20,
      SearchTarget: 'Book',
      output: 'js',
    },
    1000 * 60,
  );

  // 2. 설명 있는 책만 후보로
  const candidates =
    data?.item.filter(
      (book: AladinBook) => book.description && book.description.trim().length > 0,
    ) ?? [];

  // 3. 랜덤으로 하나 뽑기
  const book =
    candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : null;

  if (isLoading) return <section className="p-10">로딩중...</section>;
  if (!book) return <section className="p-10">추천할 책이 없습니다</section>;

  return (
    <section className="flex flex-col-reverse items-center gap-5 bg-[#fdfaf5] px-6 py-16 md:justify-between md:gap-16 lg:flex-row">
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-3 text-sm text-gray-600 italic">— 오늘의 추천 고전</p>
        <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-5xl">
          {book.title}
        </h1>
        <p className="mb-2 text-sm text-gray-500">{book.author}</p>
        <p className="mb-8 line-clamp-4 text-base text-gray-700 md:text-lg">{book.description}</p>
        <NavLink
          to={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          자세히 보기 →
        </NavLink>
      </div>

      <div className="shrink-0">
        <img
          src={MonetImage}
          alt="Claude Monet - Woman with a Parasol"
          className="h-64 w-64 rounded-full object-cover shadow-lg ring-4 ring-gray-100 md:h-96 md:w-96"
        />
      </div>
    </section>
  );
}
