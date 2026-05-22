import { Link } from "react-router-dom";
import { Award, Shield, Users, Headphones, ArrowRight } from "lucide-react";
import "./WhyUs.css";
import poppooImage from "@/assets/golfpassi-poppoo-2025.jpg";

const features = [
  {
    icon: Award,
    title: "Kokemus",
    description: "Olemme järjestäneet golfmatkoja intohimoisesti jo vuodesta 2009.",
  },
  {
    icon: Shield,
    title: "Elämys",
    description: "Kohteet on huolella valittu ja jokainen matka taidolla rakennettu.",
  },
  {
    icon: Users,
    title: "Intohimo",
    description: "Intohimona golf ja leipälajina ainutkertaiset elämykset.",
  },
  {
    icon: Headphones,
    title: "Palvelu",
    description: "Kun tärkeintä on elämys, sujuva palvelu kuuluu asiaan.",
  },
];

export function WhyUs() {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="why-us-grid">
          {/* Content */}
          <div>
            <h2 className="why-us-title">
              Huoletonta matkaa<br />
            </h2>
            <p className="why-us-description">
              Golfpassi on suomalainen perheyritys ja monen matkaajan luottokumppani.
              Viemme sinut elämäsi parhaiden golfelämysten äärelle.
              Tartu retkeen ja ota rennosti!
            </p>
            <div className="mb-8 flex justify-center">
              <Link to="/info/meista" className="text-secondary font-semibold hover:underline flex items-center gap-2">
                Lue lisää meistä <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="feature-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="feature-icon-wrapper">
                    <feature.icon className="feature-icon-svg" />
                  </div>
                  <div>
                    <p className="feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Visual */}
          <div className="why-us-visual">
            <div className="poppoo-image-container">
              <img src={poppooImage} alt="Golfpassi" className="poppoo-image" />
            </div>
            {/* Decorative lizard placeholder */}
            <div className="decorative-blob-1" />
            <div className="decorative-blob-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
