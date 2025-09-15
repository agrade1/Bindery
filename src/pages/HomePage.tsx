import BookCarousel from '@/components/books/BookCarousel';
import { carouselCategory } from '@/constants/carouselCategory';

export default function HomePage() {
  return (
    <>
      homepage
      {carouselCategory.map(({ key, title, queryType, categoryId }) => (
        <section key={key}>
          <h2 className="mb-4 text-xl font-semibold">{title}</h2>
          <BookCarousel queryType={queryType} categoryId={categoryId} />
        </section>
      ))}
    </>
  );
}
