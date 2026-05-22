import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Gift, 
  ChevronRight,
  CheckCircle2,
  Users
} from "lucide-react";
import "./Messut2027.css";

const Messut2027 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="campaign-hero">
          <div className="campaign-hero-overlay" />
          <div className="campaign-hero-content">
            <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center">
              <div className="campaign-badge">Kampanja</div>
              <h1 className="campaign-title">Golfpassi Messuilla 2027</h1>
              <p className="campaign-subtitle">
                Tammikuun kohokohta! Tule osastollemme 6k120 hakemaan vuoden parhaat messutarjoukset ja tutustumaan uutuuskohteisiin.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="campaign-info-item">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>22.–24.1.2027</span>
                </div>
                <div className="campaign-info-item">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Messukeskus, Helsinki</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Offers */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold mb-4">Messutarjoukset 2027</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Hyödynnä vuoden parhaat edut! Nämä tarjoukset ovat voimassa vain messuviikonlopun ajan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="offer-card">
                <Ticket className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-3">Ennakkovaraajan etu</h3>
                <p className="text-muted-foreground mb-6">Säästä jopa 300 € per henkilö varaamalla syksyn 2027 matkasi messuilla.</p>
                <div className="text-3xl font-bold text-secondary mb-2">-300 €</div>
              </div>
              <div className="offer-card">
                <Gift className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-3">Matkapaketti-lahja</h3>
                <p className="text-muted-foreground mb-6">Kaikkiin yli 2000 € varauksiin kaupan päälle laadukas Golfpassi-matkakassi.</p>
                <div className="text-xl font-bold text-secondary">Arvo 89 €</div>
              </div>
              <div className="offer-card">
                <Users className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-3">Ryhmäetu</h3>
                <p className="text-muted-foreground mb-6">Vähintään 4 hengen ryhmille ilmaiset rangepallot koko matkan ajaksi.</p>
                <div className="text-xl font-bold text-secondary">Bonus-etu</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Trips (Moved from Homepage) */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-4">Poimintoja messuohjelmasta</h2>
                <p className="text-muted-foreground">Tutustu suosituimpiin matkapaketteihimme, jotka esittelemme messuilla.</p>
              </div>
            </div>
            <FeaturedTrips />
          </div>
        </section>

        {/* Program Section */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-5xl font-bold mb-8">Tule kuulemaan uutuuksista</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">Perjantai klo 14:00</h4>
                      <p className="text-white/80">Uutuuskohteet 2027: Esittelyssä uudet upeat kohteet Italiassa ja Marokossa.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">Lauantai klo 11:30</h4>
                      <p className="text-white/80">Pro Henrik Sarajaksen vinkit: Miten valmistautua kauden ensimmäiselle pelimatkalle?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">Sunnuntai klo 13:00</h4>
                      <p className="text-white/80">Long Stay -matkailun trendit: Miksi koti kannattaa jättää kuukaudeksi?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl">
                  <h3 className="font-serif text-3xl font-bold mb-6">Varaa matkakonsultaatio</h3>
                  <p className="mb-8 text-white/80">Haluatko keskustella rauhassa matkasuunnitelmistasi asiantuntijamme kanssa? Varaa 15 minuutin maksuton konsultaatioaika osastollemme.</p>
                  <div className="space-y-4">
                    <input type="text" placeholder="Nimesi" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder:text-white/50" />
                    <input type="email" placeholder="Sähköposti" className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder:text-white/50" />
                    <button className="w-full bg-white text-secondary font-bold py-3 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                      Varaa aika <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Messut2027;
