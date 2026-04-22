import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./HeroCarousel.css";

import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";
import heroPohjoinen from "@/assets/pohjoisen-golfkesa-2.jpg";

interface Slide {
  id: number;
  image: string;
  badge?: string;
  title: string;
  location?: string;
  dates?: string[];
  price?: string;
  href: string;
  isPromo?: boolean;
  description?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroPohjoinen,
    badge: "Kesä 2026",
    title: "Pohjoisen golfkesä",
    description: "Lennä suvituulen selässä lähikohteisiin. Muutaman tunnin päästä olet jo mailan varressa!",
    href: "/pelimatkat",
    isPromo: true,
  },
  {
    id: 2,
    image: heroCostaNavarino,
    badge: "Parhaana palkittu!",
    title: "Costa Navarino Golf Resort",
    location: "Pilos, Kreikka",
    dates: ["22.-29.3.2026", "29.3.-5.4.2026", "4.-12.4.2026"],
    price: "alk. 2245 €",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: 3,
    image: heroBelek,
    badge: "All Inclusive!",
    title: "Sirene Golf Belek",
    location: "Belek, Turkki",
    dates: ["3.-11.4.2026", "11.-18.4.2026", "18.-25.4.2026"],
    price: "alk. 2070 €",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: 4,
    image: heroMallorca,
    badge: "Mallorca parhaimmillaan!",
    title: "Hipotels Flamenco",
    location: "Mallorca, Espanja",
    dates: ["7.-14.3.2026", "14.-21.3.2026", "21.-28.3.2026"],
    price: "alk. 1650 €",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="hero-carousel">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === current ? "active" : ""}`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="slide-image"
          />
          {/* Gradient overlay */}
          <div className="slide-overlay-left" />
          <div className="slide-overlay-bottom" />
        </div>
      ))}

      {/* Content */}
      <div className="carousel-content-container">
        <div className="carousel-text-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide-content ${index === current ? "active" : ""}`}
            >
              {slide.badge && (
                <span className="slide-badge">
                  {slide.badge}
                </span>
              )}
              <h1 className="slide-title">
                {slide.title}
              </h1>

              {slide.isPromo ? (
                <p className="slide-description">
                  {slide.description}
                </p>
              ) : (
                <>
                  <p className="slide-location">
                    {slide.location}
                  </p>
                  {/* Desktop dates (max 3 + leftover tag) */}
                  <div className="slide-dates hidden md:flex">
                    {slide.dates?.slice(0, 3).map((date) => (
                      <span key={date} className="date-tag">
                        {date}
                      </span>
                    ))}
                    {(slide.dates?.length || 0) > 3 && (
                      <span className="date-tag bg-white/20">
                        +{slide.dates!.length - 3} lähtöä
                      </span>
                    )}
                  </div>
                  {/* Mobile dates */}
                  <div className="slide-dates md:hidden">
                    <span className="date-tag">
                      {slide.dates?.length || 0} lähtöä
                    </span>
                  </div>
                </>
              )}

              <div className="slide-actions">
                <Button variant="hero" size="xl" asChild>
                  <a href={slide.href}>
                    {slide.isPromo ? "Tutustu" : slide.price ? slide.price : "Varaa nyt"}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="carousel-nav">
        <button
          onClick={prev}
          className="nav-button"
        >
          <ChevronLeft className="nav-icon" />
        </button>
        <button
          onClick={next}
          className="nav-button"
        >
          <ChevronRight className="nav-icon" />
        </button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`dot-button ${index === current ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
