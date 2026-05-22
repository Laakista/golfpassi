import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./Teemamatkat.css";
import { categoryGroups } from "@/data/categories";
import teemamatkatHeroImg from "@/assets/teemamatkat-hero.png";

export default function Teemamatkat() {
  return (
    <div className="teemamatkat-page">
      <Header />
      <main className="teemamatkat-main">
        {/* Hero Section */}
        <div className="teemamatkat-hero">
          <img src={teemamatkatHeroImg} alt="" className="teemamatkat-hero-image" />
          <div className="teemamatkat-hero-overlay" />
          <div className="teemamatkat-hero-overlay-bottom" />
          <div className="container max-w-4xl mx-auto text-center" style={{ position: 'relative', zIndex: 3 }}>
            <h1 className="hero-title">Erilaisia elämyksiä!</h1>
            <p className="hero-description text-lg max-w-2xl mx-auto">
              Rakennamme unohtumattomia matkoja jokaiseen makuun. Valitse itsellesi sopivin teema ja tartu retkeen!
            </p>
          </div>
        </div>

        <div className="teemamatkat-container">
          {/* Grouped Categories */}
          <div className="flex flex-col gap-32">
            {categoryGroups.map((group) => (
              <section key={group.title} className="category-group">
                <h2 className="category-group-title">
                  {group.title}
                </h2>
                <div className="categories-grid">
                  {group.items.map((category) => (
                    <Link
                      key={category.id}
                      to={category.href}
                      className="category-card"
                    >
                      <img
                        src={category.image}
                        alt={category.title}
                        className="category-image"
                      />
                      <div className="category-overlay" />
                      <div className="category-content">
                        <h3 className="category-title">
                          {category.title}
                        </h3>
                        <p className="category-text">
                          {category.description}
                        </p>
                        <div className="category-footer">
                          <span className="category-link">
                            {category.count > 0
                              ? `Näytä ${category.count} matkaa`
                              : 'Selaa matkoja'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
