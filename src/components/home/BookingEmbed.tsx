import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { SlidersHorizontal, MapPin, Users, Home, Globe, Tag, Calendar, Search } from "lucide-react";
import "./BookingEmbed.css";

// Import images from Pelimatkat
import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";

// Trip data - same structure as Pelimatkat
const trips = [
  {
    id: "1",
    image: heroCostaNavarino,
    badge: "Suosittu",
    badgeColor: "badge-primary",
    title: "Costa Navarino Golf Resort",
    location: "Pilos, Kreikka",
    country: "Kreikka",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-15",
    duration: "7 tai 14 vrk",
    price: 2245,
    type: "Pelimatka",
    tags: ["Rantakohde", "Luksus", "TOP-kentät", "Rajaton golf"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/kreikka/costa-navarino/1",
  },
  {
    id: "2",
    image: heroBelek,
    badge: "All Inclusive",
    badgeColor: "badge-turquoise",
    title: "Sirene Golf Belek",
    location: "Belek, Turkki",
    country: "Turkki",
    dates: "Huhtikuu 2026",
    startDate: "2026-04-10",
    duration: "7 tai 14 vrk",
    price: 2070,
    type: "Pelimatka",
    tags: ["All Inclusive", "Rantakohde", "Paras vastine rahoille", "Rajaton golf"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/turkki/sirene-belek/2",
  },
  {
    id: "3",
    image: heroMallorca,
    title: "Hipotels Flamenco",
    location: "Mallorca, Espanja",
    country: "Espanja",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-20",
    duration: "7 tai 14 vrk",
    price: 1650,
    type: "Pelimatka",
    tags: ["Puolihoito", "Rantakohde", "Paras vastine rahoille"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/espanja/mallorca-hipotels/3",
  },
  {
    id: "4",
    image: heroCostaNavarino,
    badge: "Uutuus",
    badgeColor: "badge-golf",
    title: "Picciolo Etna Golf Resort",
    location: "Sisilia, Italia",
    country: "Italia",
    dates: "Maaliskuu – Huhtikuu 2026",
    startDate: "2026-03-25",
    duration: "7 tai 14 vrk",
    price: 1875,
    type: "Pelimatka",
    tags: ["Uutuus", "Luontokohde", "Kulttuurikohde", "TOP-kentät"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/italia/sicilia-etna/4",
  },
  {
    id: "5",
    image: heroBelek,
    title: "Gloria Golf Resort",
    location: "Belek, Turkki",
    country: "Turkki",
    dates: "Maaliskuu 2026",
    startDate: "2026-03-05",
    duration: "7 vrk",
    price: 1890,
    type: "Opetusmatka",
    tags: ["All Inclusive", "Pron matkassa", "Rantakohde", "Resortloma"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/turkki/gloria-golf/5",
  },
  {
    id: "6",
    image: heroMallorca,
    title: "Son Gual Golf",
    location: "Mallorca, Espanja",
    country: "Espanja",
    dates: "Huhtikuu 2026",
    startDate: "2026-04-15",
    duration: "7 vrk",
    price: 1950,
    type: "Long stay",
    tags: ["Puolihoito", "Rantakohde", "Lennä lähelle"],
    persons: 1,
    rooms: 1,
    href: "/pelimatkat/espanja/son-gual/6",
  },
];

const tripTypes = ["Pelimatka", "Opetusmatka", "Long stay"];
const countries = [
  "Bulgaria", "Egypti", "Espanja", "Etelä-Afrikka", "Indonesia", "Italia",
  "Kanariansaaret", "Kenia", "Kreikka", "Marokko", "Pohjois-Kypros",
  "Portugali", "Skotlanti", "Turkki", "Tsekki", "Vietnam"
];
const tags = [
  "all inclusive", "puolihoito", "ranta", "luonto", "kaupunki",
  "kulttuuri", "lähelle", "kauas", "säästä",
  "hemmottele", "Uutuus"
];

type SortOption = "next" | "destination" | "country" | "price";

export function BookingEmbed() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [tripType, setTripType] = useState("");
  const [country, setCountry] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [persons, setPersons] = useState("1");
  const [rooms, setRooms] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("next");

  // Handle hash scrolling and URL parameters for preselection
  useEffect(() => {
    // Parse hash and query parameters from location.hash
    // Format: #booking-embed?matkatyyppi=Pelimatka
    const hash = location.hash;
    console.log('Current hash:', hash);

    // Extract the hash anchor (before ?)
    const hashAnchor = hash.split('?')[0];

    // Handle hash scrolling
    if (hashAnchor === '#booking-embed') {
      const element = document.getElementById('booking-embed');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Handle URL parameters from hash
    if (hash.includes('?')) {
      const queryString = hash.split('?')[1];
      const params = new URLSearchParams(queryString);
      const matkatyyppi = params.get('matkatyyppi');
      console.log('URL Parameter matkatyyppi:', matkatyyppi);
      if (matkatyyppi) {
        console.log('Setting trip type to:', matkatyyppi);
        setTripType(matkatyyppi);
      }
    }
  }, [location]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter trips
  const filteredTrips = trips.filter(trip => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        trip.title.toLowerCase().includes(query) ||
        trip.location.toLowerCase().includes(query) ||
        trip.country.toLowerCase().includes(query) ||
        trip.type.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    if (tripType && trip.type !== tripType) return false;
    if (country && trip.country !== country) return false;
    if (selectedTags.length > 0 && !selectedTags.every(tag => trip.tags.includes(tag))) return false;
    if (startDate && trip.startDate < startDate) return false;
    if (endDate && trip.startDate > endDate) return false;
    return true;
  });

  // Sort trips
  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case "next":
        return a.startDate.localeCompare(b.startDate);
      case "destination":
        return a.title.localeCompare(b.title);
      case "country":
        return a.country.localeCompare(b.country);
      case "price":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <section id="booking-embed" className="booking-section">
      <div className="booking-container">
        <div className="booking-header">
          <span className="booking-label">Kaikki matkat</span>
          <h2 className="booking-title">Etsi ja varaa matkasi</h2>
          <p className="booking-description">
            Selaa kaikkia saatavilla olevia matkoja ja varaa paikkasi helposti verkossa.
          </p>
        </div>

        {/* Advanced Filters */}
        <div className="search-filters-container">
          <div className="filters-grid-advanced">
            {/* Row 1: All 6 filters */}
            <div className="filter-group">
              <div className="filter-input-with-icon">
                <Tag className="filter-icon-inline" />
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="filter-select-with-icon"
                >
                  <option value="">Kaikki matkat</option>
                  {tripTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-input-with-icon">
                <Globe className="filter-icon-inline" />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="filter-select-with-icon"
                >
                  <option value="">Kaikki maat</option>
                  {countries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Range - merged into single grid item */}
            <div className="filter-group">
              <div className="date-fields-merged">
                <div className="filter-input-with-icon">
                  <Calendar className="filter-icon-inline" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="filter-input filter-input-date-left"
                    placeholder="Alkupäivä"
                  />
                </div>
                <div className="filter-input-with-icon">
                  <Calendar className="filter-icon-inline" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="filter-input filter-input-date-right"
                    placeholder="Loppupäivä"
                  />
                </div>
              </div>
            </div>

            {/* Persons, Rooms */}
            <div className="filter-group">
              <div className="filter-input-with-icon">
                <Users className="filter-icon-inline" />
                <select
                  value={persons}
                  onChange={(e) => setPersons(e.target.value)}
                  className="filter-select-with-icon"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} henkilö{n > 1 ? 'ä' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-input-with-icon">
                <Home className="filter-icon-inline" />
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="filter-select-with-icon"
                >
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n} huone{n > 1 ? 'tta' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Bar and Tags (full width, same row) */}
            <div className="filter-group filter-group-full">
              <div className="search-and-tags-container">
                <div className="filter-input-with-icon search-bar-wrapper">
                  <Search className="filter-icon-inline looking" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="filter-input search-bar-input"
                    placeholder="Hae matkakohteita..."
                  />
                </div>
                <div className="tags-container">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={selectedTags.includes(tag) ? "tag-button tag-button-active" : "tag-button"}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sorting and Results */}
        <div className="results-header">
          <p className="results-count">{sortedTrips.length} matkaa löytyi</p>
          <div className="sort-controls">
            <SlidersHorizontal className="sort-icon" />
            <label className="sort-label">Järjestä:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="sort-select"
            >
              <option value="next">Seuraavat lähdöt</option>
              <option value="destination">Kohde</option>
              <option value="country">Maa</option>
              <option value="price">Hinta</option>
            </select>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="trips-grid">
          {sortedTrips.map((trip, index) => (
            <Link
              key={trip.id}
              to={trip.href}
              className="trip-card"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="trip-image-container">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="trip-image"
                />
                <div className="trip-image-overlay" />
                {trip.badge && (
                  <span className={`trip-badge ${trip.badgeColor || 'badge-primary'}`}>
                    {trip.badge}
                  </span>
                )}
                <div className="trip-price-badge">
                  <span className="trip-price-from">alk.</span>
                  <span className="trip-price-amount">{trip.price} €</span>
                </div>
              </div>
              <div className="trip-content">
                <h3 className="trip-title">{trip.title}</h3>
                <div className="trip-location">
                  <MapPin className="trip-location-icon" />
                  {trip.location}
                </div>
                <div className="trip-info">
                  <div className="trip-dates">
                    <Calendar className="trip-info-icon" />
                    {trip.dates}
                  </div>
                  <span className="trip-duration">{trip.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {
          sortedTrips.length === 0 && (
            <div className="no-results">
              <p>Ei matkoja valituilla hakuehdoilla. Kokeile muuttaa suodattimia.</p>
            </div>
          )
        }

        <div className="booking-contact">
          <p className="booking-contact-text">
            Tarvitsetko apua varaamisessa? Soita meille!
          </p>
          <a href="tel:+35835151007" className="booking-phone-link">
            03 515 1007
          </a>
        </div>
      </div >
    </section >
  );
}

