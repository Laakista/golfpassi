import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Building2,
  LandPlot,
  LayoutGrid,
  BadgeInfo,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Wifi,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteRequestCTA } from "@/components/home/QuoteRequestCTA";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "./KohdeSivu.css";
import "./MatkaSivu.css"; // reuse tab styles etc.

import somabayHero from "@/assets/somabay-hero.jpg";
import huippukentatImg from "@/assets/huippukentat-800.jpg";
import luksusImg from "@/assets/luksus-800.jpg";
import kaupunkiImg from "@/assets/kaupunki-800.jpg";

// Data: destinations
interface DestinationTrip {
  title: string;
  date: string;
  price: number;
  image: string;
  url: string;
}

interface DestinationData {
  id: string;
  name: string;
  country: string;
  stars: number;
  heroImage: string;
  tags: string[];
  lowestPrice?: number;
  description: string;
  resort: {
    name: string;
    stars: number;
    description: string;
    images: string[];
    amenities: string[];
    facilities: string[];
    distances: { label: string; value: string }[];
  };
  golfCourses: {
    name: string;
    description: string;
    designer?: string;
    par?: number;
    images: string[];
  }[];
  links: { label: string; url: string }[];
  trips: DestinationTrip[];
  galleryImages: string[];
  additionalInfo?: {
    visa?: string;
    weather?: string;
  };
}

const mockDestinations: Record<string, DestinationData> = {
  somabay: {
    id: "somabay",
    name: "Soma Bay",
    country: "Egypti",
    stars: 5,
    heroImage: somabayHero,
    tags: ["ranta", "puolihoito"],
    lowestPrice: 1395,
    description: `Soma Bay sijaitsee noin 45 kilometrin päässä suositusta Hurghadan merenrantakaupungista kohti etelää, Punaisenmeren rannalla. Soma Bay on täydellinen kohde talvigolfmatkalle, sillä ympärivuotinen lämmin ilmasto ja erittäin pienet vuosittaiset sademäärät takaavat mahtavat sääolosuhteet golflomalle!

Soma Bayn eksklusiivinen lomakeskus tunnetaan upeasta Cascades-kentästään, ensiluokkaisesta Thalasso-kylpylästään ja kristallinkirkkaan Punaisenmeren läheisyydestä. Alue on rauhallinen ja turvallinen, tarjoten premium-tason golfkokemuksen kauniissa ympäristössä.`,
    resort: {
      name: "The Cascades Golf Resort, Spa & Thalasso",
      stars: 5,
      description: `The Cascades Golf Resort, Spa & Thalasso on tyylikäs hotelli, joka sijaitsee Soma Bayn sydämessä, aivan golfkentän vieressä. Tämä tasokas viiden tähden resort on kompakti ja toimiva kokonaisuus.

Vaikka hotellirakennus on todella näyttävä ja kooltaan suuri, huoneita on vain 166, joten tunnelma on rauhallinen, idyllinen ja lämmin. Hotellilla on suuri ulkouima-allas ja tilava allasalue.

Resort tarjoaa monipuoliset ravintolat, kattavan Thalasso-kylpylän ja rauhoittavan ilmapiirin koko vierailun ajan.`,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      ],
      amenities: ["Spa & Thalasso", "Kuntosali", "Ulkouima-allas", "2 ravintolaa", "Baari"],
      facilities: ["WiFi", "Ilmastointi", "Minibaari", "Tallelokero", "Hiustenkuivaaja"],
      distances: [
        { label: "Ranta", value: "2 min kuljetuksella" },
        { label: "Lentokenttä", value: "Hurghada 50 km" },
        { label: "Soma Bay Golf", value: "1,5 km" },
      ],
    },
    golfCourses: [
      {
        name: "Somabay Golf",
        description: `Somabay Golf (par 72) on golflegenda Gary Playerin suunnittelema upea kokonaisuus, joka antaa pelaajalleen ainutlaatuisen elämyksen. Player on itse kuvaillut Somabay Golfia "Afrikan Pebble Beachiksi", sillä useat kentän väylistä kulkevat aivan Punaisenmeren rannalla.

Somabay Golfia pidetään yhtenä Egyptin parhaista golfkentistä. Tällä mestaruustason golfkentällä aavikkokentän elementit yhdistyvät ihastuttavasti Punaisenmeren läsnäoloon.`,
        designer: "Gary Player",
        par: 72,
        images: [
          "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
          somabayHero,
        ],
      },
    ],
    links: [
      { label: "The Cascades Golf Resort", url: "https://thecascadeshotel.com/" },
      { label: "Somabay Golf", url: "https://somabaygolf.com" },
      { label: "Sääennuste Hurghada", url: "https://www.foreca.fi/Egypt/Al_Ghardaqah/10vrk" },
    ],
    trips: [
      {
        title: "SomaBay Golf – Hurghada",
        date: "16.–30.1.2026",
        price: 2770,
        image: somabayHero,
        url: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
      },
      {
        title: "SomaBay Golf – Hurghada",
        date: "13.–27.2.2026",
        price: 2890,
        image: huippukentatImg,
        url: "/pelimatkat/egypti/soma-bay/somabay-golf-hurghada",
      },
    ],
    galleryImages: [
      somabayHero,
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    ],
    additionalInfo: {
      visa: "Egyptiin matkustettaessa passin on oltava voimassa vähintään 6 kk maahan saapumisesta. Suomen kansalaisilta vaaditaan Egyptiin viisumi.",
      weather: "Soma Bayssä on ympärivuotisesti lämmin ilmasto, talvella 20–25 °C. Sademäärät ovat erittäin pienet.",
    },
  },
};

export default function KohdeSivu() {
  const { destinationId } = useParams<{ destinationId: string }>();
  const [activeTab, setActiveTab] = useState<"resort" | "golf" | "gallery" | "info" | "map">("resort");
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const dest = destinationId ? mockDestinations[destinationId] : null;

  const secondResortImages = [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
  ];

  const secondGolfImages = [
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    "https://images.unsplash.com/photo-1623718649591-311775a30c43?w=800&q=80"
  ];

  if (!dest) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <h1 className="font-serif text-4xl font-bold mb-4">Kohdetta ei löytynyt</h1>
          <p className="text-muted-foreground mb-8">Valitettavasti etsimääsi kohdetta ei löytynyt.</p>
          <Button asChild>
            <Link to="/kohteet">Palaa kohdesivulle</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAITipsClick = () => {
    const prompt = `Kerro minulle golfkohteesta ${dest.name}, ${dest.country}. Mitä vinkkejä ja suosituksia antaisit golfmatkalle sinne?`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(prompt).catch((err) => console.error("Clipboard failed", err));
    }
    const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
    window.open(chatGptUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="kohde-hero-section">
        <img src={dest.heroImage} alt={dest.name} className="kohde-hero-image" />
        <div className="kohde-hero-overlay-r" />

        <div className="kohde-hero-content">
          <div className="kohde-hero-text">
            <div className="kohde-hero-location">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="kohde-hero-location-text">{dest.country}</span>
            </div>



            <h1 className="kohde-hero-title">{dest.name}</h1>

            {dest.lowestPrice && (
              <div className="kohde-hero-price-box">
                <span className="kohde-hero-price-label">alk.</span>
                <span className="kohde-hero-price-value">{dest.lowestPrice} €</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {dest.tags && dest.tags.length > 0 && (
            <div className="kohde-hero-tags">
              {dest.tags.map((tag, idx) => (
                <span key={idx} className="kohde-hero-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tabs Section — directly below hero */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button
              onClick={() => setActiveTab("resort")}
              className={cn("tab-button", activeTab === "resort" ? "tab-button-active" : "tab-button-inactive")}
            >
              <Building2 className="tab-icon" />
              Hotelli & Resort
              {activeTab === "resort" && <div className="tab-indicator" />}
            </button>
            <button
              onClick={() => setActiveTab("golf")}
              className={cn("tab-button", activeTab === "golf" ? "tab-button-active" : "tab-button-inactive")}
            >
              <LandPlot className="tab-icon" />
              Golfkentät
              {activeTab === "golf" && <div className="tab-indicator" />}
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={cn("tab-button", activeTab === "gallery" ? "tab-button-active" : "tab-button-inactive")}
            >
              <LayoutGrid className="tab-icon" />
              Kuvagalleria
              {activeTab === "gallery" && <div className="tab-indicator" />}
            </button>
            <button
              onClick={() => setActiveTab("info")}
              className={cn("tab-button", activeTab === "info" ? "tab-button-active" : "tab-button-inactive")}
            >
              <BadgeInfo className="tab-icon" />
              Tietoa kohteesta
              {activeTab === "info" && <div className="tab-indicator" />}
            </button>
            <button
              onClick={() => setActiveTab("map")}
              className={cn("tab-button", activeTab === "map" ? "tab-button-active" : "tab-button-inactive")}
            >
              <MapPin className="tab-icon" />
              Näytä kartalla
              {activeTab === "map" && <div className="tab-indicator" />}
            </button>

            <div className="flex-1" />

            <button onClick={handleAITipsClick} className="ai-tips-button">
              <Sparkles className="w-4 h-4" />
              Tekoälyn matkavinkit
            </button>
          </div>

          {/* Resort Tab */}
          {activeTab === "resort" && (
            <div className="animate-fade-in">
              {/* First Resort */}
              <div>
                <div className="resort-header">
                  <h3 className="resort-title">{dest.resort.name}</h3>
                  <div className="resort-stars">
                    {Array.from({ length: dest.resort.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Resort Images */}
                <div className="resort-images-grid gap-6">
                  {dest.resort.images.map((image, index) => (
                    <div key={index} className="resort-image-wrapper">
                      <img src={image} alt={`${dest.resort.name} ${index + 1}`} className="resort-image" />
                    </div>
                  ))}
                </div>

                {/* Resort Description */}
                <div className="description-container">
                  <div className="description-grid">
                    {dest.resort.description.split("\n\n").map((paragraph, index) => (
                      <div key={index} className="description-column">
                        <p className="description-text">{paragraph}</p>
                        {index < dest.resort.description.split("\n\n").length - 1 && (
                          <div className="description-separator" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities & Features Grid */}
                <div className="amenities-grid gap-6">
                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <Building2 className="w-5 h-5 text-primary" />
                      Palvelut
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.amenities.map((amenity, index) => (
                        <li key={index} className="amenities-item">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <Wifi className="w-5 h-5 text-primary" />
                      Huoneissa
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.facilities.map((facility, index) => (
                        <li key={index} className="amenities-item">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <MapPin className="w-5 h-5 text-primary" />
                      Etäisyydet
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.distances.map((distance, index) => (
                        <li key={index} className="text-muted-foreground">
                          <span className="font-medium text-secondary">{distance.label}:</span> {distance.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hento 1px jakoviiva ja reilusti tilaa */}
              <div className="border-t border-border/50 my-16" />

              {/* Second Resort */}
              <div>
                <div className="resort-header">
                  <h3 className="resort-title">Majoitusvaihtoehto 2</h3>
                  <div className="resort-stars">
                    {Array.from({ length: dest.resort.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Resort Images */}
                <div className="resort-images-grid gap-6">
                  {secondResortImages.map((image, index) => (
                    <div key={index} className="resort-image-wrapper">
                      <img src={image} alt={`Majoitusvaihtoehto 2 ${index + 1}`} className="resort-image" />
                    </div>
                  ))}
                </div>

                {/* Resort Description */}
                <div className="description-container">
                  <div className="description-grid">
                    {dest.resort.description.split("\n\n").map((paragraph, index) => (
                      <div key={index} className="description-column">
                        <p className="description-text">{paragraph}</p>
                        {index < dest.resort.description.split("\n\n").length - 1 && (
                          <div className="description-separator" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities & Features Grid */}
                <div className="amenities-grid gap-6">
                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <Building2 className="w-5 h-5 text-primary" />
                      Palvelut
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.amenities.map((amenity, index) => (
                        <li key={index} className="amenities-item">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <Wifi className="w-5 h-5 text-primary" />
                      Huoneissa
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.facilities.map((facility, index) => (
                        <li key={index} className="amenities-item">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="amenities-card">
                    <h4 className="amenities-title">
                      <MapPin className="w-5 h-5 text-primary" />
                      Etäisyydet
                    </h4>
                    <ul className="amenities-list">
                      {dest.resort.distances.map((distance, index) => (
                        <li key={index} className="text-muted-foreground">
                          <span className="font-medium text-secondary">{distance.label}:</span> {distance.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Golf Tab */}
          {activeTab === "golf" && (
            <div className="animate-fade-in space-y-16">
              {/* First Golf Course */}
              {dest.golfCourses.map((course, index) => (
                <div key={index} className="golf-course-container">
                  <div className="golf-header">
                    <div>
                      <h3 className="golf-title">{course.name}</h3>
                      {course.designer && (
                        <p className="golf-designer">
                          Suunnittelija: <span className="font-medium text-foreground">{course.designer}</span>
                          {course.par && ` • Par ${course.par}`}
                        </p>
                      )}
                    </div>
                  </div>

                  {course.images.length > 0 && (
                    <div className="resort-images-grid gap-6">
                      {course.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="resort-image-wrapper">
                          <img src={image} alt={`${course.name} ${imgIndex + 1}`} className="resort-image" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="description-container">
                    <div className="description-grid">
                      {course.description.split("\n\n").map((paragraph, pIndex) => (
                        <div key={pIndex} className="description-column">
                          <p className="description-text">{paragraph}</p>
                          {pIndex < course.description.split("\n\n").length - 1 && (
                            <div className="description-separator" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Hento 1px jakoviiva ja reilusti tilaa */}
              <div className="border-t border-border/50" />

              {/* Second Golf Course */}
              {dest.golfCourses.map((course, index) => (
                <div key={`second-${index}`} className="golf-course-container mt-0">
                  <div className="golf-header">
                    <div>
                      <h3 className="golf-title">Toinen golfkenttä</h3>
                      {course.designer && (
                        <p className="golf-designer">
                          Suunnittelija: <span className="font-medium text-foreground">{course.designer}</span>
                          {course.par && ` • Par ${course.par}`}
                        </p>
                      )}
                    </div>
                  </div>

                  {secondGolfImages.length > 0 && (
                    <div className="resort-images-grid gap-6">
                      {secondGolfImages.map((image, imgIndex) => (
                        <div key={imgIndex} className="resort-image-wrapper">
                          <img src={image} alt={`Toinen golfkenttä ${imgIndex + 1}`} className="resort-image" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="description-container">
                    <div className="description-grid">
                      {course.description.split("\n\n").map((paragraph, pIndex) => (
                        <div key={pIndex} className="description-column">
                          <p className="description-text">{paragraph}</p>
                          {pIndex < course.description.split("\n\n").length - 1 && (
                            <div className="description-separator" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && dest.galleryImages.length > 0 && (
            <div className="animate-fade-in py-8">
              <div className="w-full h-[550px] md:h-[650px] lg:h-[750px] bg-muted/20 rounded-xl overflow-hidden mb-3 relative flex items-center justify-center">
                <img
                  src={dest.galleryImages[galleryImageIndex]}
                  alt="Galleria"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                  <button
                    onClick={() =>
                      setGalleryImageIndex((prev) =>
                        prev === 0 ? dest.galleryImages.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-primary shadow-sm transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setGalleryImageIndex((prev) =>
                        prev === dest.galleryImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-primary shadow-sm transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
                {dest.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryImageIndex(idx)}
                    className={cn(
                      "h-24 rounded-lg overflow-hidden border-2 transition-all",
                      galleryImageIndex === idx
                        ? "border-primary"
                        : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === "info" && (
            <div className="animate-fade-in py-8">
              <div className="additional-info-grid">
                <div className="links-card">
                  <h3 className="links-title">Hyödyllisiä linkkejä</h3>
                  <ul className="links-list">
                    {dest.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-item">
                          <ExternalLink className="w-4 h-4" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {dest.additionalInfo && (
                  <div className="info-card">
                    <h3 className="links-title">Hyvä tietää</h3>
                    {dest.additionalInfo.visa && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Viisumi</h4>
                        <p className="text-muted-foreground text-sm">{dest.additionalInfo.visa}</p>
                      </div>
                    )}
                    {dest.additionalInfo.weather && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Sää</h4>
                        <p className="text-muted-foreground text-sm">{dest.additionalInfo.weather}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Map Tab Content */}
          {activeTab === "map" && (
            <div className="animate-fade-in py-8">
              <div className="map-iframe-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.83546594247!2d33.9877478!3d26.8453472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144d2d47f9f3024f%3A0x6b77afbdc92af5e7!2sThe%2Cascades%20Golf%20Resort%2C%20Spa%20%26%20Thalasso!5e0!3m2!1sen!2sfi!4v1713780512345!5m2!1sen!2sfi"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-iframe"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Trips */}
      {dest.trips.length > 0 && (
        <section className="kohde-related-trips-section">
          <div className="container">
            <h2 className="kohde-related-title">
              Matkat kohteeseen {dest.name}
            </h2>
            <div className="kohde-related-grid">
              {dest.trips.map((trip, idx) => (
                <Link key={idx} to={trip.url} className="kohde-trip-card">
                  <div className="kohde-trip-card-image">
                    <img src={trip.image} alt={trip.title} />
                    <div className="kohde-trip-card-overlay" />
                    <div className="kohde-trip-card-price">
                      <span className="price-label">alk.</span>
                      <span className="price-amount">{trip.price} €</span>
                    </div>
                  </div>
                  <div className="kohde-trip-card-body">
                    <h3 className="kohde-trip-card-title">{trip.title}</h3>
                    <div className="kohde-trip-card-dates">
                      <Calendar />
                      <span>{trip.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Request CTA Module */}
      <QuoteRequestCTA
        label="Räätälöi oma matka"
        title={`Haluatko oman matkasi kohteeseen ${dest.name}?`}
        description={`Kerro meille toiveistasi, niin räätälöimme sinulle täydellisen golfmatkan kohteeseen ${dest.name} – ajankohta, sisältö ja budjetti juuri sinun näköisenäsi.`}
      />

      <Footer />
    </div>
  );
}
