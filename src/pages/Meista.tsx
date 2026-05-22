import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { History, Target, Users, Award, Shield, Headphones } from "lucide-react";
import "./Meista.css";
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

export default function Meista() {
  return (
    <div className="meista-page">
      <Header />
      <main className="meista-main pt-40">
        <div className="meista-container">

          {/* Hero */}
          <div className="meista-hero mb-16">
            <h1 className="meista-title">
              Tietoa meistä
            </h1>
            <p className="meista-description">
              Golfpassi on suomalainen perheyritys, jolla on vankka kokemus laadukkaiden golfmatkojen järjestämisestä kaikkialle ympäri maailmaa ja kaikenlaisten olosuhteiden vallitessa. Laatu ja palvelu on pelin henki!
            </p>
          </div>

          {/* Group Photo & Why Us Section */}
          <section className="meista-section mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={poppooImage}
                    alt="Golfpassi Tiimi"
                    className="rounded-3xl shadow-2xl w-full object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                </div>
              </div>
            </div>
          </section>

          {/* Info Blocks (Pähkinänkuoressa & Palkittu) */}
          <section className="meista-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="meista-card intro-card h-full">
                <h2 className="meista-section-title">Golfpassi pähkinänkuoressa</h2>
                <ul className="meista-list">
                  <li>Valtuutettu matkanjärjestäjä 763/09/Mj.</li>
                  <li>IAGTO:n (The Global Golf Tourism Organization) jäsenyritys nro. 3728.</li>
                  <li>Perustettu 30.12.2008.</li>
                  <li>Järjestää ohjattuja pelimatkoja, kurssimatkoja sekä yksilöityjä golfmatkoja golfkohteisiin maailmalla.</li>
                  <li>Palveleva ja ammattitaitoinen henkilöstö hoitaa matkajärjestelyt sekä vastaa opetuksesta ja matkapalveluista ohjatuilla pelimatkoilla.</li>
                </ul>
              </div>

              <div className="meista-card award-card h-full flex flex-col justify-center text-center">
                <h2 className="meista-section-title">Palkittu Matkanjärjestäjä</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Maailmalla tunnustettu: Kolmatta kertaa järjestetyssä World Golf Awards -gaalassa vuonna 2016 Golfpassi Oy palkittiin Suomen parhaana ulkomaille suuntautuvien golfmatkojen järjestäjänä. Valitsijoina olivat golfalan ammattilaiset ympäri maailman.
                </p>
                <p className="mt-6 font-serif font-bold text-xl text-primary">
                  Golfpassi – tärkein on aina mukana matkassa.
                </p>
              </div>
            </div>
          </section>

          {/* Articles/History */}
          <section className="meista-section mt-24 max-w-[900px] mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-8">Lue myös nämä</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="#" className="related-article-card-bottom group block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80" alt="Historia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-lg font-bold leading-tight group-hover:text-secondary mb-2">Historiamme</h4>
                <p className="text-sm text-muted-foreground">Lue tarina siitä, kuinka Lakeside Golfin PGA Prosta tuli palkitun golfmatkatoimiston perustaja.</p>
              </Link>
              <Link to="#" className="related-article-card-bottom group block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&q=80" alt="Palvelufilosofia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-lg font-bold leading-tight group-hover:text-secondary mb-2">Ihmisten palvelua</h4>
                <p className="text-sm text-muted-foreground">Henkilökohtainen palvelu on aina ollut toiminnan ytimessä. Mistä kaikesta saumaton ja sujuva kokemus sitten muodostuu?</p>
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
