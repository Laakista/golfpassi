import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, MapPin, Calendar, Grid, List, CalendarDays, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendarView } from "@/components/trips/CalendarView";
import "./KategoriaSivu.css";

import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";

const trips = [
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
    price: "2245",
    type: "pelimatka",
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
    price: "2070",
    type: "pelimatka",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "3",
    image: heroMallorca,
    title: "Hipotels Flamenco",
    location: "Mallorca, Espanja",
    country: "espanja",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-20",
    endDate: "2026-03-27",
    duration: "7 tai 14 vrk",
    price: "1650",
    type: "pelimatka",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "4",
    image: heroCostaNavarino,
    badge: "Uutuus",
    badgeColor: "badge-golf",
    title: "Picciolo Etna Golf Resort",
    location: "Sisilia, Italia",
    country: "italia",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-10",
    endDate: "2026-03-17",
    duration: "7 tai 14 vrk",
    price: "1875",
    type: "pelimatka",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "5",
    image: heroBelek,
    title: "Gloria Golf Resort",
    location: "Belek, Turkki",
    country: "turkki",
    dates: "Maaliskuu 2026",
    startDate: "2026-03-25",
    endDate: "2026-04-01",
    duration: "7 vrk",
    price: "1890",
    type: "pelimatka",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
  {
    id: "6",
    image: heroMallorca,
    title: "Son Gual Golf",
    location: "Mallorca, Espanja",
    country: "espanja",
    dates: "Huhtikuu 2026",
    startDate: "2026-04-15",
    endDate: "2026-04-22",
    duration: "7 vrk",
    price: "1950",
    type: "pelimatka",
    href: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
  },
];



export default function Akkilahdot() {
  const [viewMode, setViewMode] = useState<"grid" | "list" | "calendar">("grid");
  const [sortBy, setSortBy] = useState<"date" | "name" | "price" | "duration">("date");

  const sortedTrips = [...trips].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return Number(a.price) - Number(b.price);
      case "name":
        return a.title.localeCompare(b.title);
      case "duration": {
        const getMinDuration = (d: string) => {
          const match = d.match(/\d+/);
          return match ? parseInt(match[0]) : 999;
        };
        return getMinDuration(a.duration) - getMinDuration(b.duration);
      }
      case "date":
      default:
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    }
  });

  return (
    <div className="kategoria-page">
      <Header />
      <main className="kategoria-main">
        <div className="kategoria-container">
          {/* Hero */}
          <div className="kategoria-hero">
            <h1 className="kategoria-title">
              Äkkilähdöt
            </h1>
            <p className="kategoria-description">
              Tartu tilaisuuteen ja lähde huippumatkalle heti.
            </p>
          </div>

          {/* Filters */}
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

          {/* Trips Grid/List/Calendar */}
          {viewMode === "calendar" ? (
            <CalendarView trips={sortedTrips} />
          ) : (
            <div className={viewMode === "grid" ? "trips-grid" : "trips-list"}>
              {sortedTrips.map((trip, index) => (
                viewMode === "grid" ? (
                  <Link
                    key={trip.id}
                    to={trip.href}
                    className="trip-card-grid"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="trip-image-container">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="trip-image"
                      />
                      <div className="trip-overlay" />
                      {trip.badge && (
                        <span className={`trip-badge ${trip.badgeColor || "badge-primary"}`}>
                          {trip.badge}
                        </span>
                      )}
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
                    className="trip-card-list"
                  >
                    <div className="list-image-container">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="trip-image"
                      />
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

          {sortedTrips.length === 0 && (
            <div className="no-results">
              <p className="no-results-text">
                Ei matkoja valituilla hakuehdoilla.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
