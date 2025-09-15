import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import BookCard from './BookCard';
import { useAladinQuery } from '@/hooks/useAladinQuery';
import type { AladinResponse } from '@/types/aladinTypes';
import { useRef } from 'react';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

type BookCarouselProps = {
  categoryId: number;
  queryType: 'Bestseller' | 'ItemNewAll' | 'ItemEditorChoice';
};

export default function BookCarousel({ categoryId, queryType }: BookCarouselProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const { data, isLoading, error } = useAladinQuery<AladinResponse>(
    ['books', queryType, categoryId],
    'ItemList.aspx',
    {
      QueryType: queryType,
      CategoryId: categoryId,
      MaxResults: 10,
      Start: 1,
      SearchTarget: 'Book',
      cover: 'Big',
    },
  );

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className=""
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {data?.item.map((book) => (
          <SwiperSlide key={book.link}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        className="flex-center absolute top-1/2 left-0 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white text-2xl shadow hover:bg-gray-100"
      >
        <CaretLeftIcon />
      </button>
      <button
        ref={nextRef}
        className="flex-center absolute top-1/2 right-0 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white text-2xl shadow hover:bg-gray-100"
      >
        <CaretRightIcon />
      </button>
    </div>
  );
}
