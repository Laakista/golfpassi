import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Plane,
  Hotel,
  UtensilsCrossed,
  MapPin,
  User,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Users,
  Wifi,
  Dumbbell,
  Waves,
  Wind,
  Phone,
  Mail,
  Star
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking/BookingForm";
import { QuoteRequestForm } from "@/components/booking/QuoteRequestForm";
import { cn } from "@/lib/utils";
import "./DestinationPage.css";

// TypeScript interface for date-specific configuration
interface DateConfiguration {
  date: string;
  inclusions: string[];
  tourGuide?: {
    name: string;
    bio: string;
    profileUrl: string;
  };
  price: {
    double: number;
    single: number;
  };
}

// TypeScript interface for trip data
interface TripData {
  id: string;
  title: string;
  location: string;
  country: string;
  dateConfigurations: DateConfiguration[];
  quoteConfiguration?: {
    inclusions: string[];
    tourGuide?: {
      name: string;
      bio: string;
      profileUrl: string;
    };
  };
  heroImage: string;
  resort: {
    name: string;
    stars?: number;
    description: string;
    images: string[];
    amenities: string[];
    facilities: string[];
    distances: { label: string; value: string }[];
    roomFeatures: string[];
  };
  golfCourses: {
    name: string;
    description: string;
    designer?: string;
    par?: number;
    teeTimes?: string[];
    images: string[];
  }[];
  links: { label: string; url: string }[];
  additionalInfo?: {
    visa?: string;
    weather?: string;
  };
}

// Mock data for Soma Bay trip - in production this would come from an API or CMS
const mockTripData: Record<string, TripData> = {
  "somabay-golf-hurghada": {
    id: "somabay-golf-hurghada",
    title: "SomaBay Golf – Hurghada 14 vrk",
    location: "Soma Bay, Hurghada",
    country: "Egypti",
    dateConfigurations: [
      {
        date: "16.–30.1.2026",
        price: {
          double: 2770,
          single: 3120,
        },
        inclusions: [
          "Norwegian lennot Helsinki – Hurghada – Helsinki sis. käsimatkatavaran 10 kg ja matkalaukun ruumaan 23 kg",
          "Majoitus 14 vrk hotelli The Cascades Golf Resort, Spa & Thalasso ***** kahden hengen huoneessa",
          "Puolihoito (aamiainen ja päivällinen)",
          "10 x green fee Somabay Golfin kentällä",
          "Lentokenttäkuljetukset",
          "Matkanvetäjä Pro Henrik Sarajaksen matkapalvelut sekä kuusi golfklinikkaa palloineen",
        ],
        tourGuide: {
          name: "Henrik Sarajas",
          bio: "Pro Henrik Sarajas toimii matkanvetäjänä koko matkan ajan. Henrik tuntee Egyptin hyvin, sillä hän on asunut Kairon lähettyvillä 2 vuoden aikana toimiessaan siellä golftoimenjohtajana.",
          profileUrl: "/info/pga-prot",
        },
      },
      {
        date: "13.–27.2.2026",
        price: {
          double: 2890,
          single: 3240,
        },
        inclusions: [
          "Norwegian lennot Helsinki – Hurghada – Helsinki sis. käsimatkatavaran 10 kg ja matkalaukun ruumaan 23 kg",
          "Majoitus 14 vrk hotelli The Cascades Golf Resort, Spa & Thalasso ***** kahden hengen huoneessa",
          "Täysihoito (aamiainen, lounas ja päivällinen)",
          "12 x green fee Somabay Golfin kentällä",
          "Lentokenttäkuljetukset",
          "Matkanvetäjä Pro Maria Virtasen matkapalvelut sekä kahdeksan golfklinikkaa palloineen",
          "Yksi SPA-hoito per henkilö",
        ],
        tourGuide: {
          name: "Maria Virtanen",
          bio: "Pro Maria Virtanen on PGA-ammattilainen ja Golf Passissa toimii päävalmentajana. Maria on toiminut valmentajana yli 15 vuotta ja järjestänyt lukuisia golfmatkoja ympäri maailmaa.",
          profileUrl: "/info/pga-prot",
        },
      },
    ],
    quoteConfiguration: {
      inclusions: [
        "Suorat lennot kohteeseen sis. käsimatkatavaran ja ruumalaukun",
        "Majoitus hotelli The Cascades Golf Resort, Spa & Thalasso ***** kahden hengen huoneessa",
        "Täysihoito tai puolihoito onnistuu.",
        "Green fee -kierrokset Somabay Golfin kentällä",
        "Lentokenttäkuljetukset",
        "Matkanvetäjän palvelut ja golfklinikka",
      ],
      tourGuide: {
        name: "Golf Passin ammattilaiset",
        bio: "Matkoillamme toimii aina kokenut PGA-ammattilainen matkanvetäjänä. Matkanvetäjä räätälöi palvelut juuri teidän ryhmänne tarpeiden mukaan ja varmistaa että jokainen golfkierros on ikimuistoinen kokemus.",
        profileUrl: "/info/pga-prot",
      },
    },
    heroImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    resort: {
      name: "The Cascades Golf Resort, Spa & Thalasso",
      stars: 5,
      description: `Soma Bay sijaitsee noin 45 kilometrin päässä suositusta Hurghadan merenrantakaupungista kohti etelää. Soma Bay on täydellinen kohde talvigolfmatkalle, sillä ympärivuotinen lämmin ilmasto ja erittäin pienet vuosittaiset sademäärät takaavat mahtavat sääolosuhteet golflomalle!

The Cascades Golf Resort, Spa & Thalasso on tyylikäs hotelli, joka sijaitsee Soma Bayn sydämessä, aivan Soma Bayn golfkentän vieressä. Tämä tasokas viiden tähden resort on kompakti ja toimiva kokonaisuus, joka lumoaa vierailijansa Punaisenmeren kristallinkirkkailla vesillä, näyttävällä hotelli- ja klubirakennuksella, mainioilla palveluilla ja ihanalla ilmapiirillään.

Vaikka hotellirakennus on todella näyttävä ja kooltaan suuri, huoneita on vain 166, joten tunnelma on rauhallinen, idyllinen ja lämmin. Hotellilla on suuri ulkouima-allas ja tilava allasalue.`,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      ],
      amenities: ["Spa & Thalasso", "Kuntosali", "Ulkouima-allas", "2 ravintolaa", "Baari"],
      facilities: ["WiFi", "Ilmastointi", "Minibaari", "Tallelokero", "Hiustenkuivaaja"],
      distances: [
        { label: "Ranta", value: "2 min kuljetuksella" },
        { label: "Lentokenttä", value: "Hurghada 50 km" },
        { label: "Soma Bay", value: "1,5 km" },
      ],
      roomFeatures: [
        "166 huonetta",
        "Ilmastointi",
        "Tallelokero",
        "Minibaari",
        "WiFi",
        "Hiustenkuivaaja",
        "Kylpyamme",
      ],
    },
    golfCourses: [
      {
        name: "Somabay Golf",
        description: `Somabay Golf (par 72) on golflegenda Gary Playerin suunnittelema upea kokonaisuus, joka antaa pelaajalleen ainutlaatuisen elämyksen. Player on itse kuvaillut Somabay Golfia "Afrikan Pebble Beachiksi", sillä useat kentän väylistä kulkevat aivan Punaisenmeren rannalla.

Somabay Golfia pidetään yhtenä Egyptin parhaista golfkentistä. Tällä mestaruustason golfkentällä aavikkokentän elementit yhdistyvät ihastuttavasti Punaisenmeren läsnäoloon, kiinnostavaan layouttiin ja hyväkuntoisiin, kauniisiin väyliin.`,
        designer: "Gary Player",
        par: 72,
        teeTimes: [
          "17.1. klo 11:00",
          "18.1. klo 11:56",
          "19.1. klo 11:56",
          "21.1. klo 11:00",
          "22.1. klo 11:56",
          "24.1. klo 11:00",
          "25.1. klo 11:00",
          "26.1. klo 11:00",
          "28.1. klo 11:00",
          "29.1. klo 11:00",
        ],
        images: [
          "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
        ],
      },
    ],
    links: [
      { label: "The Cascades Golf Resort", url: "https://thecascadeshotel.com/" },
      { label: "Somabay Golf", url: "https://somabaygolf.com" },
      { label: "Norwegian", url: "https://www.norwegian.com/fi/matkusta-kanssamme/" },
      { label: "Sääennuste Hurghada", url: "https://www.foreca.fi/Egypt/Al_Ghardaqah/10vrk" },
    ],
    additionalInfo: {
      visa: "Egyptiin matkustettaessa passin on oltava voimassa vähintään 6 kk maahan saapumisesta. Suomen kansalaisilta vaaditaan Egyptiin viisumi. Viisumia voi hakea etukäteen verkosta tai sitten se myönnetän maahan saapumisen yhteydessä.",
    },
  },
};


const DestinationPage = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [activeTab, setActiveTab] = useState<"resort" | "golf">("resort");
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | "quote">(0);

  // Get trip data - in production this would fetch from API
  const trip = tripId ? mockTripData[tripId] : null;

  // Get selected date configuration or quote configuration
  const selectedConfig = trip && selectedDateIndex !== "quote"
    ? trip.dateConfigurations[selectedDateIndex]
    : null;

  // Get quote configuration data if quote is selected
  const quoteConfig = trip && selectedDateIndex === "quote"
    ? trip.quoteConfiguration
    : null;

  if (!trip) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <h1 className="font-serif text-4xl font-bold mb-4">Matkaa ei löytynyt</h1>
          <p className="text-muted-foreground mb-8">
            Valitettavasti etsimääsi matkaa ei löytynyt.
          </p>
          <Button asChild>
            <Link to="/pelimatkat">Palaa pelimatkasivulle</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={trip.heroImage}
          alt={trip.title}
          className="hero-image"
        />
        <div className="hero-overlay-gradient-r" />
        <div className="hero-overlay-gradient-t" />

        <div className="hero-content-container">
          <div className="hero-content-wrapper">
            <div className="hero-location-badge">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="hero-location-text">
                {trip.location}, {trip.country}
              </span>
            </div>

            <h1 className="hero-title">
              {trip.title}
            </h1>

            <div className="hero-price-container">
              <div className="hero-price-box">
                <span className="hero-price-label">alk.</span>
                <span className="hero-price-value">{selectedConfig?.price.double || trip.dateConfigurations[0].price.double} €</span>
              </div>

              <Button variant="hero" size="xl" className="hero-booking-button" asChild>
                <a href="#varaa">Varaa nyt</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Departure Dates Section */}
      <section className="dates-section">
        <div className="container">
          <div className="dates-container">
            <h3 className="dates-label">
              Lähdöt
            </h3>
            <div className="dates-grid">
              {trip.dateConfigurations.map((config, index) => (
                <button
                  key={config.date}
                  onClick={() => setSelectedDateIndex(index)}
                  className={cn(
                    "date-badge",
                    selectedDateIndex === index && "date-badge-selected"
                  )}
                >
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span className="date-text">{config.date}</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedDateIndex("quote")}
                className={cn(
                  "date-badge date-badge-quote",
                  selectedDateIndex === "quote" && "date-badge-selected"
                )}
              >
                <span className="date-text">Pyydä tarjous!</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Inclusions */}
      {(selectedConfig || quoteConfig) && (
        <section className="inclusions-section">
          <div className="container">
            <h2 className="section-title">
              Matkan sisältö
            </h2>
            <div className="inclusions-grid">
              {(selectedConfig?.inclusions || quoteConfig?.inclusions || []).map((item, index) => (
                <div
                  key={index}
                  className="inclusion-item"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resort & Golf Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button
              onClick={() => setActiveTab("resort")}
              className={cn(
                "tab-button",
                activeTab === "resort"
                  ? "tab-button-active"
                  : "tab-button-inactive"
              )}
            >
              Hotelli & Resort
              {activeTab === "resort" && (
                <div className="tab-indicator" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("golf")}
              className={cn(
                "tab-button",
                activeTab === "golf"
                  ? "tab-button-active"
                  : "tab-button-inactive"
              )}
            >
              Golfkentät
              {activeTab === "golf" && (
                <div className="tab-indicator" />
              )}
            </button>
          </div>

          {/* Resort Tab Content */}
          {activeTab === "resort" && (
            <div className="animate-fade-in">
              <div className="resort-header">
                <h3 className="resort-title">{trip.resort.name}</h3>
                {trip.resort.stars && (
                  <div className="resort-stars">
                    {Array.from({ length: trip.resort.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                )}
              </div>

              {/* Resort Images */}
              <div className="resort-images-grid">
                {trip.resort.images.map((image, index) => (
                  <div key={index} className="resort-image-wrapper">
                    <img
                      src={image}
                      alt={`${trip.resort.name} ${index + 1}`}
                      className="resort-image"
                    />
                  </div>
                ))}
              </div>

              {/* Resort Description */}
              <div className="description-container">
                <div className="description-grid">
                  {trip.resort.description.split('\n\n').map((paragraph, index) => (
                    <div key={index} className="description-column">
                      <p className="description-text">
                        {paragraph}
                      </p>
                      {index < trip.resort.description.split('\n\n').length - 1 && (
                        <div className="description-separator" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities & Features Grid */}
              <div className="amenities-grid">
                <div className="amenities-card">
                  <h4 className="amenities-title">
                    <Hotel className="w-5 h-5 text-primary" />
                    Palvelut
                  </h4>
                  <ul className="amenities-list">
                    {trip.resort.amenities.map((amenity, index) => (
                      <li key={index} className="amenities-item">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
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
                    {trip.resort.facilities.map((facility, index) => (
                      <li key={index} className="amenities-item">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
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
                    {trip.resort.distances.map((distance, index) => (
                      <li key={index} className="text-muted-foreground">
                        <span className="font-medium text-foreground">{distance.label}:</span>{" "}
                        {distance.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Golf Tab Content */}
          {activeTab === "golf" && (
            <div className="animate-fade-in">
              {trip.golfCourses.map((course, index) => (
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

                  {/* Course Images */}
                  {course.images.length > 0 && (
                    <div className="resort-images-grid">
                      {course.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="resort-image-wrapper">
                          <img
                            src={image}
                            alt={`${course.name} ${imgIndex + 1}`}
                            className="resort-image"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Course Description */}
                  <div className="description-container">
                    <div className="description-grid">
                      {course.description.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex} className="description-column">
                          <p className="description-text">
                            {paragraph}
                          </p>
                          {pIndex < course.description.split('\n\n').length - 1 && (
                            <div className="description-separator" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tee Times */}
                  {course.teeTimes && course.teeTimes.length > 0 && (
                    <div className="tee-times-container">
                      <h4 className="tee-times-title">Etukäteen varatut tiiajat</h4>
                      <div className="tee-times-grid">
                        {course.teeTimes.map((time, timeIndex) => (
                          <div
                            key={timeIndex}
                            className="tee-time-badge"
                          >
                            <span className="text-sm font-medium">{time}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">Muutokset ovat mahdollisia.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tour Guide Section */}
      {(selectedConfig?.tourGuide || quoteConfig?.tourGuide) && (
        <section className="tour-guide-section">
          <div className="container">
            <div className="tour-guide-card">
              <div className="tour-guide-content">
                <User className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Matkanvetäjä</h3>
                  <p className="tour-guide-name">{selectedConfig?.tourGuide?.name || quoteConfig?.tourGuide?.name}</p>
                  <p className="text-foreground mb-4">{selectedConfig?.tourGuide?.bio || quoteConfig?.tourGuide?.bio}</p>
                  <Button variant="outline" asChild>
                    <Link to={selectedConfig?.tourGuide?.profileUrl || quoteConfig?.tourGuide?.profileUrl || "/info/pga-prot"}>Lue lisää</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Section */}
      <section id="varaa" className="booking-section">
        <div className="container">
          <div className="booking-header">
            <h2 className="booking-title">
              Varaa matkasi
            </h2>
            <p className="booking-subtitle">
              Täytä varauslomake alla tai soita meille suoraan
            </p>
          </div>

          {/* Pricing Cards */}
          {selectedConfig && (
            <div className="pricing-grid">
              <div className="price-card-primary">
                <div className="price-card-header">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="price-card-title">Kahden hengen huone</h3>
                </div>
                <p className="price-card-amount">{selectedConfig.price.double} €</p>
                <p className="price-card-suffix">per henkilö</p>
              </div>

              <div className="price-card-secondary">
                <div className="price-card-header">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="price-card-title">Yhden hengen huone</h3>
                </div>
                <p className="price-card-amount">{selectedConfig.price.single} €</p>
                <p className="price-card-suffix">per henkilö</p>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <div className="booking-embed-container">
            <div className="booking-embed-header">
              <h3 className="booking-embed-title">
                {selectedDateIndex === "quote" ? "Tarjouspyyntö" : "Varauslomake"}
              </h3>
            </div>

            {selectedDateIndex === "quote" ? (
              <QuoteRequestForm tripTitle={trip.title} />
            ) : selectedConfig ? (
              <BookingForm
                tripTitle={trip.title}
                tripDates={[selectedConfig.date]}
                priceDouble={selectedConfig.price.double}
                priceSingle={selectedConfig.price.single}
              />
            ) : null}
          </div>

          {/* Contact Info */}
          <div className="contact-container">
            <p className="contact-text">
              Tarvitsetko apua varaamisessa?
            </p>
            <div className="contact-links">
              <a
                href="tel:+35835151007"
                className="contact-link-phone"
              >
                <Phone className="w-6 h-6" />
                03 515 1007
              </a>
              <span className="text-surface-dark-foreground/40">tai</span>
              <a
                href="mailto:toimisto@golfpassi.fi"
                className="contact-link-email"
              >
                <Mail className="w-5 h-5" />
                toimisto@golfpassi.fi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info & Links */}
      <section className="additional-info-section">
        <div className="container">
          <div className="additional-info-grid">
            {/* Useful Links */}
            <div className="links-card">
              <h3 className="links-title">Hyödyllisiä linkkejä</h3>
              <ul className="links-list">
                {trip.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-item"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            {trip.additionalInfo && (
              <div className="info-card">
                <h3 className="links-title">Hyvä tietää</h3>
                {trip.additionalInfo.visa && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Viisumi</h4>
                    <p className="text-muted-foreground text-sm">{trip.additionalInfo.visa}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationPage;
