import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Users, Calendar, Info, Send, User, Star, Search, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "./PyydaTarjous.css";

import kohteetHeroImg from "@/assets/kohteet-hero.png";

import somabayHero from "@/assets/somabay-hero.jpg";
import kaupunkiImg from "@/assets/kaupunki-800.jpg";
import heroCostaNavarino from "@/assets/hero-costa-navarino.jpg";
import heroBelek from "@/assets/hero-belek.jpg";
import heroMallorca from "@/assets/hero-mallorca.jpg";
import luksusImg from "@/assets/luksus-800.jpg";
import huippukentatImg from "@/assets/huippukentat-800.jpg";
import pohjoisenGolfkesa from "@/assets/pohjoisen-golfkesa-2.jpg";

const destinations = [
  {
    id: "somabay",
    country: "Egypti",
    name: "Soma Bay Resort",
    stars: 5,
    resortImage: somabayHero,
    golfImage: huippukentatImg,
  },
  {
    id: "elgouna",
    country: "Egypti",
    name: "El Gouna",
    stars: 4,
    resortImage: kaupunkiImg,
    golfImage: luksusImg,
  },
  {
    id: "costanavarino",
    country: "Kreikka",
    name: "Costa Navarino",
    stars: 5,
    resortImage: heroCostaNavarino,
    golfImage: heroMallorca,
  },
  {
    id: "belek",
    country: "Turkki",
    name: "Belek",
    stars: 5,
    resortImage: heroBelek,
    golfImage: pohjoisenGolfkesa,
  },
];

export default function PyydaTarjous() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  const filteredDestinations = searchTerm.length >= 3
    ? destinations.filter(d =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  const toggleDestination = (id: string) => {
    setSelectedDestinations(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <div className="pyyda-tarjous-page">
      <Header />
      <main className="pyyda-tarjous-main">
        {/* Hero Section */}
        <div className="pyyda-tarjous-hero">
          <img src={kohteetHeroImg} alt="" className="pyyda-tarjous-hero-image" />
          <div className="pyyda-tarjous-hero-overlay" />
          <div className="pyyda-tarjous-hero-overlay-bottom" />
          <div className="container max-w-4xl mx-auto text-center" style={{ position: 'relative', zIndex: 3 }}>
            <h1 className="hero-title">Pyydä tarjous</h1>
            <p className="hero-description text-lg max-w-2xl mx-auto">
              Täytä allaoleva lomake tai ota yhteyttä, niin osaamme rakentaa juuri teidän porukalle täydellisesti räätälöidyn golfmatkan – viimeistä piirtoa myöten.
            </p>
          </div>
        </div>

        <div className="pyyda-tarjous-form-area">
          <div className="container max-w-4xl mx-auto pb-24">
            <form className="tarjous-form" onSubmit={(e) => e.preventDefault()}>

              {/* Matkakohde */}
              <div className="form-section">
                <div className="form-section-header">
                  <div className="form-section-icon bg-green/10 text-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="form-section-title">Matkakohde</h2>
                    <p className="form-section-desc">Onko kiikarissa jo selvä kohde tai kohdemaa, tietty golfkenttä vai kenties ympäröivät palvelut tai luontotyyppi? HAE ESIM EGYPTILLÄ!</p>
                  </div>
                </div>

                {/* Search field */}
                <div className="form-group relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      className="form-input pl-10"
                      placeholder="Maa, kohde tai golfkenttä..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Compact destination list */}
                {filteredDestinations.length > 0 && (
                  <div className="tarjous-destinations-list">
                    {filteredDestinations.map(dest => {
                      const isSelected = selectedDestinations.includes(dest.id);
                      return (
                        <div
                          key={dest.id}
                          className={`tarjous-destination-card ${isSelected ? "tarjous-destination-selected" : ""}`}
                          onClick={() => toggleDestination(dest.id)}
                        >
                          {/* Selection indicator */}
                          <div
                            className={`tarjous-select-badge ${isSelected ? "tarjous-select-badge-active" : ""}`}
                            aria-label={isSelected ? "Valittu" : "Ei valittu"}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>

                          {/* Column 1: Info */}
                          <div className="tarjous-dest-info">
                            <span className="tarjous-dest-name">{dest.name}</span>
                            <span className="tarjous-dest-country">{dest.country}</span>
                            <div className="tarjous-dest-stars">
                              {[...Array(dest.stars)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                            <Link to={`/kohteet/${dest.id}`} className="tarjous-dest-link" onClick={(e) => e.stopPropagation()}>
                              Tutustu <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {/* Column 2: Resort image */}
                          <div className="tarjous-dest-image-col">
                            <img src={dest.resortImage} alt={`${dest.name} hotelli`} className="tarjous-dest-image" />
                          </div>

                          {/* Column 3: Golf image */}
                          <div className="tarjous-dest-image-col">
                            <img src={dest.golfImage} alt={`${dest.name} kenttä`} className="tarjous-dest-image" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="form-group mt-4">
                  <label>Vapaat toiveet kohteesta</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Vaikka jossakin Välimerellä, ei liian kuuma, ei liian vaikeaa golfia, paljon hyviä ravintoloita ja vehreyttä..."
                    rows={8}
                  />
                </div>
              </div>

              <hr className="form-divider" />

              {/* Ajankohta */}
              <div className="form-section">
                <div className="form-section-header">
                  <div className="form-section-icon bg-orange/10 text-orange">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="form-section-title">Ajankohta</h2>
                    <p className="form-section-desc">Onko tarkka aika jo tiedossa vai tähdätäänkö tiettyyn aikaväliin?</p>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Esim. ensi vuoden lokakuussa, vko 42 tai tarkat päivät..." />
                </div>
              </div>

              <hr className="form-divider" />

              {/* Matkaseurue */}
              <div className="form-section">
                <div className="form-section-header">
                  <div className="form-section-icon bg-blue/10 text-blue">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="form-section-title">Matkaseurue</h2>
                    <p className="form-section-desc">Minkälainen ryhmä matkalle lähtee?</p>
                  </div>
                </div>
                <div className="form-grid sm:grid-cols-2">
                  <div className="form-group">
                    <label>Aikuisia</label>
                    <input type="number" min="1" className="form-input" placeholder="Määrä" />
                  </div>
                  <div className="form-group">
                    <label>Lapsia</label>
                    <input type="number" min="0" className="form-input" placeholder="Määrä" />
                  </div>
                  <div className="form-group sm:col-span-2">
                    <label>Ryhmän toiveet ja rajoitteet</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Onko ryhmässä esim. aloittelijoita, senioreita, pelkkiä singeleitä tai erikoisruokavalioita..."
                      rows={6}
                    />
                  </div>
                </div>
              </div>

              <hr className="form-divider" />

              {/* Matkan luonne */}
              <div className="form-section">
                <div className="form-section-header">
                  <div className="form-section-icon bg-purple/10 text-purple">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="form-section-title">Matkan luonne</h2>
                    <p className="form-section-desc">Painaako hinta, laatu vai vaivattomuus eniten? Mistä porukka syttyy?</p>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    placeholder="Haluammeko luksusta ja viiden tähden hotellin vai budjettimatkan? Ollaanko reissussa täysihoidolla vai tutustutaanko paikallisiin ravintoloihin?"
                    rows={8}
                  />
                </div>
              </div>

              <hr className="form-divider" />

              {/* Yhteyshenkilö */}
              <div className="form-section">
                <div className="form-section-header">
                  <div className="form-section-icon bg-primary/10 text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="form-section-title">Yhteyshenkilö</h2>
                    <p className="form-section-desc">Kuka antaa lisätietoja tarvittaessa ja välittää tarjouksen ryhmälle?</p>
                  </div>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nimi</label>
                    <input type="text" className="form-input" placeholder="Etunimi Sukunimi" required />
                  </div>
                  <div className="form-group">
                    <label>Sähköposti</label>
                    <input type="email" className="form-input" placeholder="esim. matti@esimerkki.fi" required />
                  </div>
                  <div className="form-group sm:col-span-2">
                    <label>Puhelinnumero</label>
                    <input type="tel" className="form-input" placeholder="040 123 4567" required />
                  </div>
                </div>
              </div>

              <div className="form-submit-container">
                <Button size="lg" className="px-10 text-lg flex items-center gap-2 group">
                  Lähetä tarjouspyyntö
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-slate-500 text-sm mt-4">
                  Palaamme asiaan mahdollisimman pian! Voit myös aina soittaa meille numeroon 03 515 1007.
                </p>
              </div>

            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
