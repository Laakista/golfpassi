import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Header.css";
import logoWhite from "@/assets/golfpassi-logo-2026.svg";

const navItems = [
  {
    label: "Pelimatkat",
    href: "/pelimatkat",
    megaMenu: [
      { label: "Kreikka", href: "/pelimatkat/kreikka" },
      { label: "Turkki", href: "/pelimatkat/turkki" },
      { label: "Espanja", href: "/pelimatkat/espanja" },
      { label: "Italia", href: "/pelimatkat/italia" },
      { label: "Portugali", href: "/pelimatkat/portugali" },
      { label: "Listanäkymä", href: "/pelimatkat/lista" },
    ],
  },
  { label: "Yksilöidyt matkat", href: "/yksiloidyt-matkat" },
  { label: "Opetusmatkat", href: "/opetusmatkat" },
  { label: "Long Stay", href: "/long-stay" },
  { label: "Teemamatkat", href: "/teemamatkat" },
  { label: "Äkkilähdöt", href: "/akkilahdot" },
  {
    label: "Info",
    href: "/info",
    megaMenu: [
      { label: "Tietoa meistä", href: "/info/meista" },
      { label: "PGA Prot", href: "/info/pga-prot" },
      { label: "UKK", href: "/ukk" },
      { label: "Yhteys", href: "/yhteys" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="header-fixed">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <a href="tel:+35835151007" className="contact-link">
              <Phone className="contact-icon" />
              03 515 1007 (9–16)
            </a>
            <a href="mailto:toimisto@golfpassi.fi" className="contact-link">
              <Mail className="contact-icon" />
              toimisto@golfpassi.fi
            </a>
          </div>
          <Link to="/black-friday" className="black-friday-link">
            🔥 Katso Black Friday -tarjoukset!
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src={logoWhite} alt="Golfpassi" className="logo-image" />
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="nav-item-wrapper"
                onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`nav-link ${activeMenu === item.label ? "active" : ""}`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="chevron-icon" />}
                </Link>

                {/* Mega menu dropdown */}
                {item.megaMenu && activeMenu === item.label && (
                  <div className="mega-menu-dropdown">
                    <div className="mega-menu-content">
                      {item.megaMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="mega-menu-link"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Button variant="ghost" size="icon" className="search-button">
              <Search className="search-icon" />
            </Button>
            <Link to="/#booking-embed">
              <Button variant="hero" size="default">
                Varaa matkasi!
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-button"
          >
            {mobileOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-container">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <div className="mobile-sub-menu">
                      {item.megaMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="mobile-sub-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mobile-cta-wrapper">
                <Link to="/#booking-embed" onClick={() => setMobileOpen(false)}>
                  <Button variant="hero" className="mobile-cta-button">
                    Varaa matkasi!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
