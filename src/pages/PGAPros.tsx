import { Link } from "react-router-dom";
import { Award, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import "./PGAPros.css";

const pros = [
  {
    id: "1",
    name: "Matti Virtanen",
    title: "PGA Pro",
    speciality: "Lyöntitekniikka",
    experience: "15+ vuotta",
    bio: "Matti on kokenut golfopettaja, joka on erikoistunut lyöntitekniikan kehittämiseen. Hänen rauhallinen ja selkeä opetustyylinsä sopii kaikentasoisille pelaajille.",
    upcomingTrips: ["Costa Navarino, Maaliskuu 2026", "Belek, Huhtikuu 2026"],
  },
  {
    id: "2",
    name: "Anna Korhonen",
    title: "PGA Pro",
    speciality: "Lyhyt peli",
    experience: "12+ vuotta",
    bio: "Anna on lyhyen pelin spesialisti, joka auttaa sinua parantamaan chippauksia, putteja ja bunkkerilyöntejä. Hänen energinen opetustyylinsä inspiroi ja motivoi.",
    upcomingTrips: ["Mallorca, Maaliskuu 2026"],
  },
  {
    id: "3",
    name: "Jukka Lahtinen",
    title: "PGA Pro",
    speciality: "Pelinkehitys",
    experience: "20+ vuotta",
    bio: "Jukka on kokenut kilpapelaaja ja valmentaja, joka keskittyy kokonaisvaltaiseen pelinkehitykseen. Hän auttaa sinua löytämään vahvuutesi ja kehittämään strategista ajatteluasi.",
    upcomingTrips: ["Costa Navarino, Huhtikuu 2026", "Sicilia, Huhtikuu 2026"],
  },
  {
    id: "4",
    name: "Laura Nieminen",
    title: "PGA Pro",
    speciality: "Naisten golf",
    experience: "10+ vuotta",
    bio: "Laura on erikoistunut naisten golfin opetukseen ja tarjoaa kannustavaa valmennusta kaikentasoisille pelaajille. Hänen mottonsa on 'Golf on hauskaa!'",
    upcomingTrips: ["Belek, Maaliskuu 2026"],
  },
];

export default function PGAPros() {
  return (
    <div className="pgapros-page">
      <Header />
      <main className="pgapros-main">
        <div className="pgapros-container">
          {/* Hero */}
          <div className="pgapros-hero">
            <h1 className="pgapros-title">
              PGA Prot
            </h1>
            <p className="pgapros-description">
              Tuttu suomalainen golfopettaja mukana jokaisella opetusmatkallamme.
              Kehitä peliäsi kaukana arjen häiriöistä - osaavab ammattilaisten opastuksella.
            </p>
          </div>

          {/* Pro Grid */}
          <div className="pgapros-grid">
            {pros.map((pro, index) => (
              <div
                key={pro.id}
                className="pro-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pro-card-content-wrapper">
                  {/* Image placeholder */}
                  <div className="pro-image-container">
                    <div className="pro-avatar">
                      <span className="pro-initials">
                        {pro.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pro-details">
                    <div className="pro-header">
                      <Award className="pro-icon" />
                      <span className="pro-role">
                        {pro.title}
                      </span>
                    </div>
                    <h2 className="pro-name">
                      {pro.name}
                    </h2>
                    <p className="pro-speciality">
                      {pro.speciality} • {pro.experience}
                    </p>
                    <p className="pro-bio">
                      {pro.bio}
                    </p>

                    {/* Upcoming trips */}
                    <div className="upcoming-trips">
                      <p className="upcoming-label">
                        <Calendar className="calendar-icon" />
                        Tulevat matkat:
                      </p>
                      <div className="trips-list">
                        {pro.upcomingTrips.map((trip) => (
                          <span
                            key={trip}
                            className="trip-tag"
                          >
                            {trip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pgapros-cta">
            <h2 className="cta-title">
              Kiinnostaako opetusmatka?
            </h2>
            <p className="cta-description">
              Tutustu opetusmatkoihimme ja kehitä peliäsi ammattilaisten opastuksella
              upeissa kohteissa.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/opetusmatkat">Tutustu opetusmatkoihin</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
