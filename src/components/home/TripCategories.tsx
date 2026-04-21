import { Link } from "react-router-dom";
import { ArrowRight, Plane, GraduationCap, Users, Calendar, Zap } from "lucide-react";
import "./TripCategories.css";

const categories = [
  {
    icon: Plane,
    title: "Pelimatkat",
    description: "Valmiit golfmatkat upeisiin kohteisiin. Kaikki järjestetty valmiiksi.",
    href: "/#booking-embed?matkatyyppi=Pelimatka",
    color: "golf",
  },
  {
    icon: GraduationCap,
    title: "Opetusmatkat",
    description: "Kehitä peliäsi ammattilaisten opastuksella eksoottisissa kohteissa.",
    href: "/#booking-embed?matkatyyppi=Opetusmatka",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Yksilöidyt matkat",
    description: "Räätälöidyt matkapaketit juuri sinun toiveittesi mukaan.",
    href: "/yksiloidyt-matkat",
    color: "turquoise",
  },
  {
    icon: Calendar,
    title: "Long Stay",
    description: "Pidemmät lomat auringossa. Ota oma aikasi.",
    href: "/#booking-embed?matkatyyppi=Long stay",
    color: "purple-accent",
  },
  {
    icon: Zap,
    title: "Äkkilähdöt",
    description: "Viime hetken tarjoukset ja parhaat diilit nopeille päättäjille.",
    href: "/akkilahdot",
    color: "primary",
  },
];

export function TripCategories() {
  return (
    <section className="trip-categories-section">
      <div className="trip-categories-container">
        <div className="trip-categories-header">
          <span className="trip-categories-label">
            Erilaiset matkatyypit
          </span>
          <h2 className="trip-categories-title">
            Matkoja joka lähöön
          </h2>
          <p className="trip-categories-description">
            Golfpassin valikoimasta löytyy upea paketti ihan jokaiseen makuun.
          </p>
        </div>

        <div className="trip-categories-grid">
          {categories.map((category, index) => {
            return (
              <Link
                key={category.title}
                to={category.href}
                className={`category-card ${category.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="category-icon-wrapper">
                  <category.icon className="category-icon-svg" />
                </div>
                <h3 className="category-title">
                  {category.title}
                </h3>
                <p className="category-description">
                  {category.description}
                </p>
                <div className="category-link-text">
                  Tutustu
                  <ArrowRight className="arrow-icon-svg" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
