import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Header.css";
import logoColor from "@/assets/golfpassi-logo-color.svg";
import mascotLizard from "@/assets/lisko.png";

import { categoryGroups } from "@/data/categories";

type MegaMenuGroup = {
  title?: string;
  items: { label: string; href: string }[];
};

type NavItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenuGroup[];
};

const navItems: NavItem[] = [
  { label: "Kaikki matkat", href: "/#booking-embed" },
  { 
    label: "Erilaisia elämyksiä!", 
    href: "/teemamatkat",
    megaMenu: categoryGroups.map(group => ({
      title: group.title,
      items: group.items.map(item => ({ label: item.title, href: item.href }))
    }))
  },
  { label: "Äkkilähdöt", href: "/akkilahdot" },
  { label: "Kohteet", href: "/kohteet" },
  { label: "Pyydä tarjous", href: "/pyyda-tarjous" },
  {
    label: "Info",
    href: "/info/tiedotteet",
    megaMenu: [
      {
        title: "Viestikeskus",
        items: [
          { label: "Tiedotteet ja artikkelit", href: "/info/tiedotteet" },
          { label: "Usein kysytyt kysymykset", href: "/ukk" }
        ]
      },
      {
        title: "Tutustu meihin",
        items: [
          { label: "Tietoa meistä", href: "/info/meista" },
          { label: "Prot ja matkanjohtajat", href: "/info/pga-prot" }
        ]
      },
      {
        title: "Yhteys",
        items: [
          { label: "Yhteystiedot", href: "/yhteys" },
          { label: "Yhteyshenkilöt", href: "/yhteys#yhteyshenkilot" }
        ]
      },
      {
        title: "Omat tiedot",
        items: [
          { label: "Kirjaudu sisään", href: "/tili" }
        ]
      }
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (label: string) => {
    setOpenMobileSubMenus(prev => ({...prev, [label]: !prev[label]}));
  };

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
            <img src={logoColor} alt="Golfpassi" className="logo-image" />
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
                    {/* Bridge the gap to prevent hover loss */}
                    <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                    <div className="mega-menu-content">
                      {item.megaMenu.map((group, groupIdx) => (
                        <div key={groupIdx} className="mega-menu-column">
                          {group.title && (
                            <h4 className={`mega-menu-column-title ${
                              group.title === "Haasta itsesi" ? "group-title-blue" :
                              group.title === "Sopiva irtiotto" ? "group-title-orange" :
                              group.title === "Valitse teema!" ? "group-title-purple" :
                              group.title === "Hyvässä seurassa" ? "group-title-green" : ""
                            }`}>{group.title}</h4>
                          )}
                          <div className="mega-menu-column-items">
                            {group.items.map((subItem) => (
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
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mascot Lizard */}
            <div className="nav-mascot-wrapper">
              <img src={mascotLizard} alt="" className="nav-mascot-image" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Button
              variant="ghost"
              size="icon"
              className={`search-button ${searchOpen ? "active" : ""}`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="search-icon" />
            </Button>
            <Link to="/ostoskori" className="round-nav-button cart-button" title="Ostoskori">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/tili" className="round-nav-button account-button" title="Käyttäjätili">
              <User className="w-5 h-5" />
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
                  {item.megaMenu ? (
                    <button
                      className="mobile-nav-link flex items-center justify-between w-full text-left"
                      onClick={() => toggleSubMenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSubMenus[item.label] ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.megaMenu && openMobileSubMenus[item.label] && (
                    <div className="mobile-sub-menu">
                      {item.megaMenu.map((group, groupIdx) => (
                        <div key={groupIdx} className="mb-4">
                          {group.title && (
                            <div className={`text-sm font-bold mb-2 mt-2 ${
                              group.title === "Haasta itsesi" ? "group-title-blue" :
                              group.title === "Sopiva irtiotto" ? "group-title-orange" :
                              group.title === "Valitse teema!" ? "group-title-purple" :
                              group.title === "Hyvässä seurassa" ? "group-title-green" : "text-secondary"
                            }`}>{group.title}</div>
                          )}
                          {group.items.map((subItem) => (
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
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="search-dropdown">
            <div className="search-dropdown-content">
              <span className="search-dropdown-title">Hae sivustolta</span>
              <div className="search-input-wrapper">
                <div className="search-field-container">
                  <input
                    type="text"
                    placeholder="Kirjoita hakusana..."
                    className="search-input"
                    autoFocus
                  />
                  <Search className="search-field-icon" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(false)}
                  className="search-close-button"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
