import BookCard from './BookCard';

type BookCarouselProps = {
  categoryId: number;
  queryType: 'Bestseller' | 'ItemNewAll' | 'ItemEditorChoice';
};

export default function BookCarousel({ categoryId, queryType }: BookCarouselProps) {
  return (
    <>
      BookCarousel
      <BookCard />
    </>
  );
}
