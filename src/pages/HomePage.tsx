import BookCarousel from '@/components/books/BookCarousel';
import { carouselCategory } from '@/constants/carouselCategory';

export default function HomePage() {
  return (
    <>
      {carouselCategory.map(({ key, title, queryType, categoryId }) => (
        <section key={key} className="my-16">
          <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
          <BookCarousel queryType={queryType} categoryId={categoryId} />
        </section>
      ))}
    </>
  );
}
