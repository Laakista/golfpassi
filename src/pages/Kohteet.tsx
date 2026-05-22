import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, List, Star, ArrowRight, Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import "./Kohteet.css";
import kohteetHeroImg from "@/assets/kohteet-hero.png";

import somabayHero from "@/assets/somabay-hero.jpg";
import kaupunkiImg from "@/assets/kaupunki-800.jpg";
import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";
import luksusImg from "@/assets/luksus-800.jpg";
import huippukentatImg from "@/assets/huippukentat-800.jpg";
import pohjoisenGolfkesa from "@/assets/pohjoisen-golfkesa-2.jpg";

// Mock data
const destinations = [
  {
    id: "somabay",
    country: "Egypti",
    name: "Soma Bay Resort",
    stars: 5,
    description: "Soma Bay on eksklusiivinen lomakeskus Punaisenmeren rannalla, tunnettu upeasta Cascades-kentästään ja ensiluokkaisesta Thalasso-kylpylästään. Täydellinen kohde lämpöä hakeville talvella.",
    tags: ["Aavikkogolf", "Thalasso Spa", "Aurinko"],
    link: "/kohteet/somabay",
    departures: [
      { title: "Soma Bay Promatka", date: "17.1.–24.1.2026", price: "1395" },
      { title: "Soma Bay Long Stay", date: "17.1.–31.1.2026", price: "2245" },
    ],
    resortImage: {
      url: somabayHero,
      caption: "Upea The Cascades Golf Resort & Thalasso Spa."
    },
    golfImage: {
      url: huippukentatImg,
      caption: "Soma Bay Golf, Gary Playerin mestariteos Punaisenmeren rannalla."
    }
  },
  {
    id: "elgouna",
    country: "Egypti",
    name: "El Gouna",
    stars: 4,
    description: "Punaisenmeren Venetsiaksikin kutsuttu El Gouna tarjoaa idyllisen kanavakaupungin tunnelmaa ja hyvää golfia vain lyhyen matkan päässä lentokentältä.",
    tags: ["Ranta", "Kaupunki", "Kanavat"],
    link: "#",
    departures: [],
    resortImage: {
      url: kaupunkiImg,
      caption: "Idyllinen lomakeskus meren äärellä."
    },
    golfImage: {
      url: luksusImg,
      caption: "El Gouna Golf Club, keidas keskellä aavikkoa."
    }
  },
  {
    id: "costanavarino",
    country: "Kreikka",
    name: "Costa Navarino",
    stars: 5,
    description: "Euroopan uusin huippukohde tarjoaa upeat puitteet. Neljä toisistaan poikkeavaa huipputason golfkenttää (mm. Olazabal ja Langer) ja häikäisevän kaunis Joonianmeren rannikko.",
    tags: ["Luksus", "4 Kenttää", "Uutuus"],
    link: "#",
    departures: [
      { title: "Costa Navarino Promatka", date: "15.3.–22.3.2026", price: "2245" },
    ],
    resortImage: {
      url: heroCostaNavarino,
      caption: "The Romanos ja W Costa Navarino tarjoavat luksusta."
    },
    golfImage: {
      url: heroMallorca,
      caption: "The Dunes Course kulkee oliivilehtojen läpi rannalle."
    }
  },
  {
    id: "belek",
    country: "Turkki",
    name: "Belek",
    stars: 5,
    description: "Golfarin paratiisi. Belek on tunnettu valtavasta määrästä toinen toistaan upeampia All Inclusive -hotelleja sekä tiheässä sijaitsevista maailmanluokan kentistä.",
    tags: ["All Inclusive", "Golfparatiisi", "Ranta"],
    link: "#",
    departures: [
      { title: "Belek All Inclusive", date: "5.4.–12.4.2026", price: "2070" },
      { title: "Belek Spring Break", date: "25.3.–1.4.2026", price: "1890" },
      { title: "Belek Seniorimatka", date: "19.4.–26.4.2026", price: "1950" },
    ],
    resortImage: {
      url: heroBelek,
      caption: "Upeat All Inclusive -resortit palvelevat 24/7."
    },
    golfImage: {
      url: pohjoisenGolfkesa,
      caption: "Belekissä on yli kymmenen laadukasta mestaruustason kenttää."
    }
  }
];

export default function Kohteet() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");

  // Suodatetaan hakusanalla
  const filtered = searchQuery
    ? destinations.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : destinations;

  // Ryhmitellään ja aakkostetaan maat
  const groupedDestinations = filtered.reduce((acc, curr) => {
    if (!acc[curr.country]) acc[curr.country] = [];
    acc[curr.country].push(curr);
    return acc;
  }, {} as Record<string, typeof destinations>);

  const sortedCountries = Object.keys(groupedDestinations).sort();

  return (
    <div className="kohteet-page">
      <Header />
      <main className="kohteet-main">
        {/* Hero */}
        <div className="kohteet-hero">
          <img src={kohteetHeroImg} alt="" className="kohteet-hero-image" />
          <div className="kohteet-hero-overlay" />
          <div className="kohteet-hero-overlay-bottom" />
          <div className="container max-w-6xl mx-auto">
            <h1 className="hero-title text-center">
              Matkakohteet
            </h1>
            <p className="hero-description text-lg max-w-2xl mx-auto text-center">
              Täältä löydät kaikki valikoimastamme löytyvät kohteet. Ihastuitko, mutta sinulle sopivia lähtöjä ei ole tarjolla? Pyydä tarjous!
            </p>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto">
          {/* Search + View Toggles */}
          <div className="view-controls-bar">
            <div className="kohteet-search">
              <Search className="kohteet-search-icon" />
              <input
                type="text"
                placeholder="Hae kohdetta tai maata..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="kohteet-search-input"
              />
            </div>
            <div className="view-controls bg-white p-1 rounded-lg border border-slate-200 inline-flex">
              <button
                onClick={() => setViewMode("list")}
                className={`view-button px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 transition-colors ${viewMode === "list" ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <List className="w-4 h-4" />
                Listanäkymä
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`view-button px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 transition-colors ${viewMode === "map" ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100"}`}
              >
                <MapPin className="w-4 h-4" />
                Karttanäkymä
              </button>
            </div>
          </div>

          {viewMode === "map" ? (
            <div className="map-placeholder bg-slate-200 w-full h-[600px] rounded-2xl flex items-center justify-center flex-col gap-4 border border-slate-300">
              <MapPin className="w-16 h-16 text-slate-400" />
              <h2 className="text-2xl font-bold text-slate-600">Karttanäkymä</h2>
              <p className="text-slate-500">Tähän tuodaan interaktiivinen kartta kaikista kohteista.</p>
            </div>
          ) : (
            <div className="destinations-list">
              {sortedCountries.map(country => (
                <section key={country} className="country-group">
                  <h2 className="country-title">{country}</h2>

                  {groupedDestinations[country].map(dest => (
                    <div key={dest.id} className="destination-card">
                      {/* Palsta 1: Tiedot */}
                      <div className="destination-content">
                        <div className="destination-header">
                          <h3 className="destination-name">{dest.name}</h3>
                          <div className="destination-stars">
                            {[...Array(dest.stars)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>

                        <p className="destination-desc">{dest.description}</p>

                        <div className="destination-tags">
                          {dest.tags.map(tag => (
                            <span key={tag} className="destination-tag">{tag}</span>
                          ))}
                        </div>

                        <Link to={dest.link} className="destination-link">
                          Tutustu tarkemmin
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Palsta 2: Resort kuva */}
                      <div className="destination-image-col">
                        <img src={dest.resortImage.url} alt="Resort" className="destination-image" />
                        <div className="destination-caption">{dest.resortImage.caption}</div>
                      </div>

                      {/* Palsta 3: Golf kuva */}
                      <div className="destination-image-col">
                        <img src={dest.golfImage.url} alt="Golf" className="destination-image" />
                        <div className="destination-caption">{dest.golfImage.caption}</div>
                      </div>

                      {/* Lähdöt */}
                      {dest.departures && dest.departures.length > 0 && (
                        <div className="destination-departures">
                          <h4 className="departures-title">
                            <Calendar className="w-4 h-4" />
                            Lähdöt ({dest.departures.length})
                          </h4>
                          <div className="departures-list">
                            {dest.departures.map((dep, i) => (
                              <Link key={i} to={dest.link} className="departure-chip">
                                <span className="departure-name">{dep.title}</span>
                                <span className="departure-date">{dep.date}</span>
                                <span className="departure-price">alk. {dep.price} €</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
