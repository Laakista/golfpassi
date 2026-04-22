import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";
import logoWhite from "@/assets/golfpassi-logo-2026.svg";

const footerLinks = {
  matkat: [
    { label: "Pelimatkat", href: "/pelimatkat" },
    { label: "Yksilöidyt matkat", href: "/yksiloidyt-matkat" },
    { label: "Opetusmatkat", href: "/opetusmatkat" },
    { label: "Long Stay", href: "/long-stay" },
    { label: "Teemamatkat", href: "/teemamatkat" },
    { label: "Äkkilähdöt", href: "/akkilahdot" },
  ],
  kohteet: [
    { label: "Kreikka", href: "/kohteet/kreikka" },
    { label: "Turkki", href: "/kohteet/turkki" },
    { label: "Espanja", href: "/kohteet/espanja" },
    { label: "Italia", href: "/kohteet/italia" },
    { label: "Portugali", href: "/kohteet/portugali" },
  ],
  info: [
    { label: "Tietoa meistä", href: "/info/meista" },
    { label: "PGA Prot", href: "/info/pga-prot" },
    { label: "UKK", href: "/ukk" },
    { label: "Matkaehdot", href: "/info/matkaehdot" },
    { label: "Tietosuoja", href: "/info/tietosuoja" },
  ],
};

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="brand-column">
            <Link to="/" className="footer-logo-link">
              <img src={logoWhite} alt="Golfpassi" className="footer-logo-image" />
            </Link>
            <p className="footer-description">
              Intohimoinen golfmatkojen järjestäjä. Räätälöimme unelmien golfloman juuri sinulle.
            </p>
            <div className="footer-contact-info">
              <a href="tel:+35835151007" className="footer-contact-link">
                <Phone className="footer-icon" />
                03 515 1007 (ma-pe 9–16)
              </a>
              <a href="mailto:toimisto@golfpassi.fi" className="footer-contact-link">
                <Mail className="footer-icon" />
                toimisto@golfpassi.fi
              </a>
              <div className="footer-contact-text">
                <MapPin className="footer-icon" />
                Tampere, Finland
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="links-column-title">Matkat</h4>
            <ul className="links-list">
              {footerLinks.matkat.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="links-column-title">Info</h4>
            <ul className="links-list">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="links-column-title">Tartu retkeen</h4>
            <ul className="footer-stats-list text-white/80 space-y-2 mt-4 text-sm">
              <li>Perustettu 2008</li>
              <li>5000+ palveltua asiakasta</li>
              <li>30000+ golfkierrosta</li>
              <li>40+ matkakohdetta</li>
              <li>15+ PGA Prota</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>© 2026 Golfpassi. Sivusto <a href="https://laaki.fi">Laakista.</a></p>
          <div className="footer-bottom-links">
            <Link to="/info/matkaehdot" className="bottom-link">
              Matkaehdot
            </Link>
            <Link to="/info/tietosuoja" className="bottom-link">
              Tietosuoja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
