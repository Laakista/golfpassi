import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import "./FeaturedTrips.css";

import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";

interface Trip {
  id: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  location: string;
  dates: string;
  duration: string;
  price: string;
  href: string;
}

const featuredTrips: Trip[] = [
  {
    id: "1",
    image: heroCostaNavarino,
    badge: "Suosituin",
    badgeColor: "badge-primary",
    title: "Costa Navarino Golf Resort",
    location: "Pilos, Kreikka",
    dates: "Maaliskuu – Huhtikuu 2026",
    duration: "7 tai 14 vrk",
    price: "2245",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "2",
    image: heroBelek,
    badge: "All Inclusive",
    badgeColor: "badge-turquoise",
    title: "Sirene Golf Belek",
    location: "Belek, Turkki",
    dates: "Huhtikuu 2026",
    duration: "7 tai 14 vrk",
    price: "2070",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "3",
    image: heroMallorca,
    title: "Hipotels Flamenco",
    location: "Mallorca, Espanja",
    dates: "Maaliskuu – Huhtikuu 2026",
    duration: "7 tai 14 vrk",
    price: "1650",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "4",
    image: heroCostaNavarino,
    badge: "Uutuus",
    badgeColor: "badge-golf",
    title: "Picciolo Etna Golf Resort",
    location: "Sisilia, Italia",
    dates: "Maaliskuu – Huhtikuu 2026",
    duration: "7 tai 14 vrk",
    price: "1875",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
];

export function FeaturedTrips() {
  return (
    <section className="featured-trips-section">
      <div className="featured-trips-container">
        <div className="featured-trips-header">
          <div>
            <span className="featured-trips-label">
              Toimiston poiminnat
            </span>
            <h2 className="featured-trips-title">
              Tartu retkeen!
            </h2>
          </div>
          <Link
            to="/#booking-embed"
            className="view-all-link"
          >
            Näytä kaikki matkat
            <ArrowRight className="arrow-icon" />
          </Link>
        </div>

        <div className="featured-trips-grid">
          {featuredTrips.map((trip, index) => (
            <Link
              key={trip.id}
              to={trip.href}
              className="featured-trip-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="trip-image-wrapper">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="trip-image-img"
                />
                <div className="trip-image-overlay" />
                {trip.badge && (
                  <span
                    className={`trip-badge-span ${trip.badgeColor || "badge-primary"}`}
                  >
                    {trip.badge}
                  </span>
                )}
                <div className="trip-price-box">
                  <span className="price-label-text">alk.</span>
                  <span className="price-amount-text">{trip.price} €</span>
                </div>
              </div>

              {/* Content */}
              <div className="trip-content-box">
                <h3 className="trip-title-h3">
                  {trip.title}
                </h3>
                <div className="trip-location-div">
                  <MapPin className="location-icon-svg" />
                  {trip.location}
                </div>
                <div className="trip-details-row">
                  <div className="trip-dates-div">
                    <Calendar className="calendar-icon-svg" />
                    {trip.dates}
                  </div>
                  <span className="trip-duration-span">{trip.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
