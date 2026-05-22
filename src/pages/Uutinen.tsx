import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import authorJani from "@/assets/jani.jpg";
import messutImage from "@/assets/messut.jpg";
import "./Uutinen.css";

const Uutinen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 md:pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Breadcrumbs */}
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-secondary">Etusivu</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/info/tiedotteet" className="hover:text-secondary">Tiedotteet ja artikkelit</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Golfpassi Messuilla 2027</span>
          </div>

          <div className="max-w-[900px] mx-auto">
            
            {/* Main Content */}
            <article>
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="category-tag-news">Tiedotteet</span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10.5.2026</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min lukuaika</span>
                  </div>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-10">Golfpassi Messuilla 2027 – Tule tapaamaan meitä!</h1>
                
                <div className="article-hero-image-wrapper">
                  <img 
                    src={messutImage} 
                    alt="Golfpassi Messuilla" 
                    className="article-hero-image" 
                  />
                  <p className="image-caption">Löydät meidät osastolta 6k120, tervetuloa!</p>
                </div>
              </header>

              <div className="article-body">
                <p className="lead-paragraph">
                  Ensi vuoden suurin golftapahtuma lähestyy! Golfpassi on mukana Messukeskuksessa tammikuussa 2027 suuremmalla osastolla kuin koskaan aikaisemmin. Tule keskustelemaan matkasuunnitelmistasi, hyödyntämään messutarjoukset ja kuulemaan uutuuskohteistamme ensimmäisten joukossa.
                </p>
                
                <h2>Mitä osastollamme tapahtuu?</h2>
                <p>
                  Tänä vuonna olemme panostaneet erityisesti elämyksellisyyteen. Osastollamme pääset testaamaan taitojasi puttikisassa, tapaamaan PGA-proitamme ja kuulemaan tarinoita maailman upeimmilta golfkentiltä.
                </p>
                
                <ul>
                  <li><strong>Messutarjoukset:</strong> Eksklusiivisia alennuksia vain messujen aikana tehtyihin varauksiin.</li>
                  <li><strong>Uutuuskohteet 2027:</strong> Julkaisemme messuilla viisi täysin uutta kohdetta.</li>
                  <li><strong>Pro-klinikat:</strong> Lyhyitä opetushetkiä osastolla non-stoppina.</li>
                  <li><strong>Kilpailut:</strong> Voita unelmien golfmatka kahdelle!</li>
                </ul>

                <blockquote>
                  "Haluamme tuoda messuille palan sitä tunnelmaa, jota asiakkaamme kokevat matkoillamme. Golf on enemmän kuin peli – se on yhteisöllisyyttä ja elämyksiä."
                  <cite>— Juha Passi, toimitusjohtaja</cite>
                </blockquote>

                <p>
                  Löydät meidät osastolta <strong>6k120</strong>, aivan golf-alueen ytimestä. Suosittelemme varaamaan ajan henkilökohtaiseen matkakonsultaatioon jo etukäteen, jotta voimme rauhassa käydä läpi juuri sinulle sopivia vaihtoehtoja.
                </p>
              </div>

              {/* Share & Tags */}
              <footer className="mt-16 pt-8 border-t flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-muted-foreground">Avainsanat:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-outline">Messut</span>
                    <span className="tag-outline">Tapahtumat</span>
                    <span className="tag-outline">Tarjoukset</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-muted-foreground">Jaa artikkeli:</span>
                  <div className="flex gap-2">
                    <button className="social-share-btn"><Facebook className="w-4 h-4" /></button>
                    <button className="social-share-btn"><Twitter className="w-4 h-4" /></button>
                    <button className="social-share-btn"><Linkedin className="w-4 h-4" /></button>
                    <button className="social-share-btn"><Share2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </footer>

              {/* Author Box - Moved below content */}
              <div className="author-box-bottom mt-20 p-10 bg-muted/30 rounded-3xl flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
                  <img src={authorJani} alt="Jani Kinnunen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Jani Kinnunen</h4>
                  <p className="text-muted-foreground mb-4">Matka-asiantuntija & PGA Pro</p>
                  <p className="text-sm leading-relaxed">
                    Jani on intohimoinen golfaaja ja matkailun ammattilainen, joka tuntee maailman parhaat viheriöt kuin omat taskunsa. 
                    Hän auttaa asiakkaitamme löytämään juuri heille sopivat unelmakohteet.
                  </p>
                </div>
              </div>

              {/* Related Articles - Moved below content and styled side-by-side */}
              <div className="mt-20">
                <h3 className="font-serif text-3xl font-bold mb-8">Lue myös nämä</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link to="#" className="related-article-card-bottom group">
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                      <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80" alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="text-lg font-bold leading-tight group-hover:text-secondary mb-2">Miksi valita Long Stay -matka?</h4>
                    <p className="text-sm text-muted-foreground">8.5.2026</p>
                  </Link>
                  <Link to="#" className="related-article-card-bottom group">
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                      <img src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&q=80" alt="Related" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="text-lg font-bold leading-tight group-hover:text-secondary mb-2">Kauden 2026 uutuudet on julkaistu</h4>
                    <p className="text-sm text-muted-foreground">1.5.2026</p>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Uutinen;
