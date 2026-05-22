import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, Grid, List, CalendarDays, Phone, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendarView } from "@/components/trips/CalendarView";
import { TripCategories } from "@/components/home/TripCategories";
import { flatCategories } from "@/data/categories";
import "./KategoriaSivu.css";

// Import images
import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";
import pgaProTeaching from "@/assets/promatkat-800.jpg";
import yritykset from "@/assets/business-800.jpg";
import huippukentat from "@/assets/huippukentat-800.jpg";
import luksus from "@/assets/luksus-800.jpg";
import luonto from "@/assets/luonto-800.jpg";
import kulinarismi from "@/assets/kulinarismi-800.jpg";
import historiaa from "@/assets/historiaa-800.jpg";
import ladies from "@/assets/ladies-800.jpg";
import seniorit from "@/assets/seniorit-800.jpg";
import golfpassiPoppoo from "@/assets/sinkkumatkat-800.jpg";

// Detailed trip database with category matching
const categoryTripsData = [
  {
    id: "1",
    image: heroCostaNavarino,
    badge: "Suosituin",
    badgeColor: "badge-primary",
    title: "Costa Navarino Golf Resort",
    location: "Pilos, Kreikka",
    country: "kreikka",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-15",
    endDate: "2026-03-22",
    duration: "7 tai 14 vrk",
    durationDays: 7,
    price: 2245,
    categoryIds: ["top-courses", "luxury", "wine", "seniors", "kisa"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "2",
    image: heroBelek,
    badge: "All Inclusive",
    badgeColor: "badge-turquoise",
    title: "Sirene Golf Belek",
    location: "Belek, Turkki",
    country: "turkki",
    dates: "Huhtikuu 2026",
    startDate: "2026-04-05",
    endDate: "2026-04-12",
    duration: "7 tai 14 vrk",
    durationDays: 7,
    price: 2070,
    categoryIds: ["luxury", "pro", "seniors", "corporate"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "3",
    image: heroMallorca,
    title: "Hipotels Flamenco",
    location: "Mallorca, Espanja",
    country: "espanja",
    dates: "Maaliskuu 2026",
    startDate: "2026-03-20",
    endDate: "2026-03-27",
    duration: "7 vrk",
    durationDays: 7,
    price: 1650,
    categoryIds: ["short-breaks", "singles", "women", "city"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "4",
    image: luonto,
    badge: "Uutuus",
    badgeColor: "badge-golf",
    title: "Picciolo Etna Golf Resort",
    location: "Sisilia, Italia",
    country: "italia",
    dates: "Huhtikuu 2026",
    startDate: "2026-04-10",
    endDate: "2026-04-17",
    duration: "7 vrk",
    durationDays: 7,
    price: 1875,
    categoryIds: ["nature", "culture", "wine"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "5",
    image: pgaProTeaching,
    title: "Gloria Golf Resort - PGA Henrik",
    location: "Belek, Turkki",
    country: "turkki",
    dates: "Maaliskuu 2026",
    startDate: "2026-03-05",
    endDate: "2026-03-12",
    duration: "7 vrk",
    durationDays: 7,
    price: 1890,
    categoryIds: ["pro", "luxury", "seniors", "corporate"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "6",
    image: heroMallorca,
    title: "Son Gual Golf - Long Stay",
    location: "Mallorca, Espanja",
    country: "espanja",
    dates: "Huhtikuu – Toukokuu 2026",
    startDate: "2026-04-15",
    endDate: "2026-05-06",
    duration: "21 vrk",
    durationDays: 21,
    price: 1950,
    categoryIds: ["long-stay", "top-courses"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "7",
    image: huippukentat,
    badge: "TOP-kenttä",
    badgeColor: "badge-primary",
    title: "Camiral Golf & Wellness (PGA Catalunya)",
    location: "Girona, Espanja",
    country: "espanja",
    dates: "Toukokuu 2026",
    startDate: "2026-05-02",
    endDate: "2026-05-09",
    duration: "7 vrk",
    durationDays: 7,
    price: 2490,
    categoryIds: ["top-courses", "luxury", "kisa", "corporate"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "8",
    image: ladies,
    badge: "Naisten ryhmä",
    badgeColor: "badge-turquoise",
    title: "Ladies Only: Evian Resort & Spa",
    location: "Evian-les-Bains, Ranska",
    country: "ranska",
    dates: "Toukokuu 2026",
    startDate: "2026-05-18",
    endDate: "2026-05-25",
    duration: "7 vrk",
    durationDays: 7,
    price: 2650,
    categoryIds: ["women", "luxury", "nature", "wine"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "9",
    image: kulinarismi,
    title: "Golf & Wine Toscana",
    location: "Toscana, Italia",
    country: "italia",
    dates: "Toukokuu 2026",
    startDate: "2026-05-10",
    endDate: "2026-05-17",
    duration: "7 vrk",
    durationDays: 7,
    price: 2190,
    categoryIds: ["wine", "culture", "luxury", "short-breaks"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "10",
    image: yritykset,
    badge: "Yritysryhmät",
    badgeColor: "badge-golf",
    title: "Business & Pleasure: Quinta do Lago",
    location: "Algarve, Portugali",
    country: "portugali",
    dates: "Lokakuu 2026",
    startDate: "2026-10-04",
    endDate: "2026-10-11",
    duration: "7 vrk",
    durationDays: 7,
    price: 2350,
    categoryIds: ["corporate", "luxury", "top-courses"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "11",
    image: golfpassiPoppoo,
    badge: "Sinkut",
    badgeColor: "badge-primary",
    title: "Sinkkumatka: Aphrodite Hills",
    location: "Pafos, Kypros",
    country: "kypros",
    dates: "Marraskuu 2026",
    startDate: "2026-11-01",
    endDate: "2026-11-08",
    duration: "7 vrk",
    durationDays: 7,
    price: 1980,
    categoryIds: ["singles", "short-breaks", "top-courses"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "12",
    image: seniorit,
    badge: "Senioreille",
    badgeColor: "badge-turquoise",
    title: "Senior Golf: Pestana Golf Resort",
    location: "Algarve, Portugali",
    country: "portugali",
    dates: "Marraskuu 2026",
    startDate: "2026-11-10",
    endDate: "2026-11-24",
    duration: "14 vrk",
    durationDays: 14,
    price: 1790,
    categoryIds: ["seniors", "long-stay"],
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  }
];

export default function KategoriaSivu() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [viewMode, setViewMode] = useState<"grid" | "list" | "calendar">("grid");
  const [sortBy, setSortBy] = useState<"date" | "name" | "price" | "duration">("date");

  const category = flatCategories.find((cat) => cat.id === categoryId);

  const getBorderColorClass = (catId: string) => {
    if (["pro", "kisa"].includes(catId)) return "border-blue";
    if (["long-stay", "short-breaks"].includes(catId)) return "border-orange";
    if (["top-courses", "luxury", "nature", "wine", "city", "culture"].includes(catId)) return "border-purple";
    if (["singles", "women", "seniors", "corporate"].includes(catId)) return "border-green";
    return "";
  };

  const getBgColorClass = (catId: string) => {
    if (["pro", "kisa"].includes(catId)) return "bg-blue";
    if (["long-stay", "short-breaks"].includes(catId)) return "bg-orange";
    if (["top-courses", "luxury", "nature", "wine", "city", "culture"].includes(catId)) return "bg-purple";
    if (["singles", "women", "seniors", "corporate"].includes(catId)) return "bg-green";
    return "";
  };

  if (!category) {
    return (
      <div className="kategoria-page">
        <Header />
        <main className="kategoria-main text-center py-20">
          <div className="kategoria-container">
            <h2 className="text-2xl font-bold mb-4">Kategoriaa ei löydy</h2>
            <Link to="/teemamatkat" className="text-primary hover:underline">
              Palaa Erilaisia elämyksiä -sivulle
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter trips belonging to this category
  const filteredTrips = categoryTripsData.filter((trip) =>
    trip.categoryIds.includes(category.id)
  );

  // Sort trips
  const sortedTrips = [...filteredTrips].sort((a, b) => {
    if (sortBy === "date") {
      return a.startDate.localeCompare(b.startDate);
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "price") {
      return a.price - b.price;
    }
    if (sortBy === "duration") {
      return a.durationDays - b.durationDays;
    }
    return 0;
  });

  return (
    <div className="kategoria-page">
      <Header />
      <main className="kategoria-main">
        <div className="kategoria-container">
          {/* Hero */}
          <div className="kategoria-hero">
            <span className="kategoria-label">Teemamatkat</span>
            <h1 className="kategoria-title">
              {category.title}
            </h1>
            <p className="kategoria-description">
              {category.description}
            </p>
          </div>

          {/* Filters (Sort + View toggles) */}
          <div className="kategoria-filters">
            <div className="view-controls">
              <button
                onClick={() => setViewMode("grid")}
                className={`view-button ${viewMode === "grid" ? "view-button-active" : "view-button-inactive"}`}
                title="Ruudukkonäkymä"
              >
                <Grid className="view-icon" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`view-button ${viewMode === "list" ? "view-button-active" : "view-button-inactive"}`}
                title="Listanäkymä"
              >
                <List className="view-icon" />
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`view-button ${viewMode === "calendar" ? "view-button-active" : "view-button-inactive"}`}
                title="Kalenterinäkymä"
              >
                <CalendarDays className="view-icon" />
              </button>
            </div>

            <div className="sort-controls">
              <SlidersHorizontal className="sort-icon" />
              <label className="sort-label">Järjestä:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-select"
              >
                <option value="date">Ajankohta</option>
                <option value="name">Nimi</option>
                <option value="price">Hinta</option>
                <option value="duration">Kesto</option>
              </select>
            </div>
          </div>

          {/* Trips Listing */}
          {sortedTrips.length === 0 ? (
            <div className="no-results py-12 text-center">
              <p className="no-results-text text-lg text-slate-500 mb-4">
                Tähän kategoriaan ei ole tällä hetkellä aktiivisia valmiita matkoja.
              </p>
              <p className="text-slate-600 max-w-lg mx-auto">
                Räätälöimme mielellämme juuri sinun toiveidesi mukaisen matkan tästä teemasta. Ota meihin yhteyttä!
              </p>
            </div>
          ) : viewMode === "calendar" ? (
            <CalendarView trips={sortedTrips.map(trip => ({ ...trip, price: trip.price.toString() }))} />
          ) : (
            <div className={viewMode === "grid" ? "trips-grid" : "trips-list"}>
              {sortedTrips.map((trip, index) => (
                viewMode === "grid" ? (
                  <Link
                    key={trip.id}
                    to={trip.href}
                    className={`trip-card-grid ${getBorderColorClass(category.id)}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="trip-image-container">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="trip-image"
                      />
                      <div className="trip-overlay" />
                      <div className="trip-badges-container">
                        <span className={`trip-type-tag ${getBgColorClass(category.id)}`}>
                          {category.title}
                        </span>
                        {trip.badge && (
                          <span className={`trip-badge ${trip.badgeColor || "badge-primary"}`}>
                            {trip.badge}
                          </span>
                        )}
                      </div>
                      <div className="trip-price-tag">
                        <span className="price-label">alk.</span>
                        <span className="price-amount">{trip.price} €</span>
                      </div>
                    </div>
                    <div className="trip-content">
                      <h3 className="trip-title">
                        {trip.title}
                      </h3>
                      <div className="trip-location">
                        <MapPin className="location-icon" />
                        {trip.location}
                      </div>
                      <div className="trip-details">
                        <div className="trip-dates">
                          <Calendar className="calendar-icon" />
                          {trip.dates}
                        </div>
                        <span className="trip-duration">{trip.duration}</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={trip.id}
                    to={trip.href}
                    className={`trip-card-list ${getBorderColorClass(category.id)}`}
                  >
                    <div className="list-image-container">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="trip-image"
                      />
                      <div className="trip-badges-container">
                        <span className={`trip-type-tag ${getBgColorClass(category.id)}`}>
                          {category.title}
                        </span>
                      </div>
                    </div>
                    <div className="list-content">
                      <div className="list-info">
                        <h3 className="list-title">
                          {trip.title}
                        </h3>
                        <div className="list-meta">
                          <span className="list-location">
                            <MapPin className="location-icon" />
                            {trip.location}
                          </span>
                          <span>{trip.dates}</span>
                          <span className="trip-duration">{trip.duration}</span>
                        </div>
                      </div>
                      <div className="list-price-container">
                        <p className="list-price-label">alk.</p>
                        <p className="list-price-amount">{trip.price} €</p>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          )}

          {/* Under Listing Call-to-action */}
          <div className="booking-contact mt-16 pt-8 border-t border-slate-100">
            <p className="booking-contact-text text-slate-500 mb-4">
              Eikö näistä löytynyt sopivaa? Katso kaikki matkamme hakukoneesta tai ota meihin yhteyttä!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
              <Link to="/#booking-embed" className="booking-phone-link">
                Katso kaikki matkat →
              </Link>
              <a href="tel:+35835151007" className="inline-flex items-center gap-2 text-xl font-bold text-secondary hover:underline">
                <Phone className="w-5 h-5" />
                03 515 1007 (ma-pe 9–16)
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Category Carousel */}
      <TripCategories />

      <Footer />
    </div>
  );
}
