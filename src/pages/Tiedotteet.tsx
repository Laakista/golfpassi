import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Info,
  ArrowRight,
  Filter
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./Tiedotteet.css";

const categories = ["Kaikki", "Uutiset", "Tarjoukset", "Vinkit", "Tapahtumat"];

const bulletins = [
  {
    id: "b1",
    type: "info",
    title: "Toimistomme palvelee puhelimitse arkisin klo 9-16",
    content: "Olemme siirtyneet kesäaikatauluun. Tavoitat meidät parhaiten puhelimitse tai sähköpostitse.",
    date: "1.5.2026"
  },
  {
    id: "b2",
    type: "warning",
    title: "Maastopalot Kreikassa ja Turkissa",
    content: "Seuraamme tilannetta tiiviisti. Toistaiseksi matkat toteutuvat suunnitellusti. Vaikutukset koskevat pääasiassa liikennejärjestelyitä tietyillä alueilla.",
    date: "12.5.2026"
  },
  {
    id: "b5",
    type: "alert",
    title: "Lentoliikenteen lakonuhka Ranskassa",
    content: "Seuraamme Ranskan lennonjohdon lakon vaikutuksia. Tiedotamme matkustajia suoraan tarvittaessa.",
    date: "14.5.2026"
  },
  {
    id: "b6",
    type: "info",
    title: "Uudistimme Golfpassin verkkosivut ja varausjärjestelmän!",
    content: "Täydellisen golfmatkan löytäminen ja varaaminen on nyt entistä helpompaa ja sujuvampaa. Tutustu uudistuneeseen sivustoon ja anna palautetta vapaasti!",
    date: "25.5.2026"
  }
];

const articles = [
  {
    id: "1",
    title: "Golfpassi Messuilla 2027 – Tule tapaamaan meitä!",
    excerpt: "Ensi vuoden messuosastomme on suurempi kuin koskaan. Luvassa on upeita tarjouksia ja uutuuskohteiden esittelyitä.",
    category: "Tapahtumat",
    date: "10.5.2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&q=80"
  },
  {
    id: "2",
    title: "Miksi valita Long Stay -matka? Asiantuntijamme vinkit",
    excerpt: "Long Stay -matkat ovat kasvattaneet suosiotaan. Lue, mitä kannattaa ottaa huomioon kuukauden golfreissua suunnitellessa.",
    category: "Vinkit",
    date: "8.5.2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
  },
  {
    id: "3",
    title: "Soma Bay – Punaisenmeren helmi hurmaa golfaajat",
    excerpt: "Kävimme testaamassa Egyptin suosituimman kohteen. Lue matkakertomus ja katso upeat kuvat.",
    category: "Uutiset",
    date: "5.5.2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80"
  },
  {
    id: "4",
    title: "Kauden 2026 uutuudet on julkaistu",
    excerpt: "Listasimme kymmenen uutta kohdetta, joita et halua missata ensi kaudella.",
    category: "Uutiset",
    date: "1.5.2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80"
  },
  {
    id: "5",
    title: "Parhaat kohteet kevään golflomalle",
    excerpt: "Kevät on parasta aikaa golfmatkailulle. Listasimme suosikkimme.",
    category: "Vinkit",
    date: "25.4.2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
  },
  {
    id: "6",
    title: "Early Bird -tarjoukset talvelle 2027",
    excerpt: "Varaa talven matkasi nyt ja säästä jopa 300 euroa.",
    category: "Tarjoukset",
    date: "20.4.2026",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80"
  }
];

const Tiedotteet = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kaikki");

  const filteredArticles = selectedCategory === "Kaikki"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="tiedotteet-main pb-0">

        {/* Hero */}
        <div className="tiedotteet-container">
          <div className="tiedotteet-hero mb-16">
            <h1 className="tiedotteet-title">Tiedotteet ja artikkelit</h1>
            <p className="tiedotteet-description">
              Tärkeää ajankohtaista tietoa ja tarinoita golfmatkailun maailmasta.
            </p>
          </div>
        </div>

        {/* Full-width Bulletins at Top */}
        <section className="mb-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl font-bold">Tiedotteet</h2>
              </div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6 py-4">
                {bulletins.map(bulletin => (
                  <CarouselItem key={bulletin.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className={`bulletin-full-card bulletin-${bulletin.type}`}>
                      <div className="flex justify-between items-start mb-3">
                        <span className="bulletin-date">{bulletin.date}</span>
                        {bulletin.type === 'alert' && <AlertCircle className="w-5 h-5 text-destructive" />}
                        {bulletin.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-600" />}
                      </div>
                      <h4 className="font-bold text-lg mb-2 leading-tight">{bulletin.title}</h4>
                      <p className="text-sm opacity-90 leading-relaxed">{bulletin.content}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 border-2 w-12 h-12 hover:bg-slate-100" />
                <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 border-2 w-12 h-12 hover:bg-slate-100" />
              </div>
            </Carousel>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 pb-24">

          {/* Article Listing Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">Artikkelit ja uutiset</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Syvenny matkakohteisiin, poimi parhaat vinkit ja lue tuoreimmat kuulumiset golfkentiltä.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${selectedCategory === cat
                      ? "bg-secondary text-white border-secondary shadow-md"
                      : "bg-white text-muted-foreground border-muted-foreground/20 hover:border-secondary/50 hover:text-secondary"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid - Equal Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <Link key={article.id} to={`/info/tiedotteet/${article.id}`} className="article-card-equal group">
                <div className="article-image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <span className="article-category-tag">{article.category}</span>
                </div>
                <div className="article-content">
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="read-more-btn">
                    Lue artikkeli <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="lataa-vanhempia-articles-btn">
              Näytä lisää artikkeleita
            </button>
          </div>
        </div>

        {/* Home Newsletter instead of sidebar version */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Tiedotteet;
