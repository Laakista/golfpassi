import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./TripCategories.css";
import "../../pages/Teemamatkat.css";
import { flatCategories } from "@/data/categories";

export function TripCategories() {
  return (
    <section className="trip-categories-section py-20" style={{ backgroundColor: '#00a8ff17' }}>
      <div className="trip-categories-container container mx-auto px-4">
        <div className="trip-categories-header mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Erilaisia elämyksiä
          </h2>
          <p className="text-lg text-slate-600">
            Valitse juuri sinulle sopiva matka. Unohtumattomat hetket huippukohteissa odottavat!
          </p>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[1600px] mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-8">
            {flatCategories.map((category) => (
              <CarouselItem key={category.id} className="pl-4 md:pl-6 basis-[90%] md:basis-1/2 lg:basis-[45%]">
                <Link
                  to={category.href}
                  className="category-card"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="category-image"
                  />
                  <div className="category-overlay" />
                  <div className="category-content">
                    <h2 className="category-title">
                      {category.title}
                    </h2>
                    <p className="category-text">
                      {category.description}
                    </p>
                    <div className="category-footer">
                      <span className="category-link">
                        {category.count > 0
                          ? `Näytä ${category.count} matkaa`
                          : category.id === 'quote' ? 'Pyydä tarjous' : 'Selaa matkoja'}
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 border-2 w-12 h-12 hover:bg-slate-100" />
            <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 border-2 w-12 h-12 hover:bg-slate-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
