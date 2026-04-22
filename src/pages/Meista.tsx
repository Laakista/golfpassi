import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { History, Target, Users } from "lucide-react";
import "./Meista.css";

export default function Meista() {
  return (
    <div className="meista-page">
      <Header />
      <main className="meista-main pt-24">
        <div className="meista-container">
          
          {/* Hero */}
          <div className="meista-hero">
            <h1 className="meista-title">
              Tietoa yrityksestä
            </h1>
            <p className="meista-description">
              Golfpassi järjestää laadukkaita golfmatkoja kaikkialle maailman upeimpiin golfkohteisiin. Laatu ja palvelu on pelin henki!
            </p>
          </div>

          {/* Intro Section */}
          <section className="meista-section">
            <div className="meista-card intro-card">
              <h2 className="meista-section-title">Golfpassi pähkinänkuoressa</h2>
              <ul className="meista-list">
                <li>Valtuutettu matkanjärjestäjä 763/09/Mj.</li>
                <li>IAGTO:n (The Global Golf Tourism Organization) jäsenyritys nro. 3728.</li>
                <li>Perustettu 30.12.2008.</li>
                <li>Järjestää ohjattuja pelimatkoja, kurssimatkoja sekä yksilöityjä golfmatkoja golfkohteisiin maailmalla.</li>
                <li>Palveleva ja ammattitaitoinen henkilöstö hoitaa matkajärjestelyt sekä vastaa opetuksesta ja matkapalveluista ohjatuilla pelimatkoilla.</li>
              </ul>
            </div>
          </section>

          {/* History grid */}
          <section className="meista-section">
            <div className="meista-grid">
              {/* Box 1 */}
              <div className="meista-card">
                <div className="meista-icon-wrapper">
                  <History className="meista-icon" />
                </div>
                <h3>Historia</h3>
                <p>
                  Golfpassi Oy on perustettu vuonna 2008. Perustaja ja matkatoimiston johtaja Juha Passi on toiminut PGA Prona Lakeside Golfissa vuodesta 1996 lähtien. Kokemukset ulkomailta sekä ehtymätön innostus golfiin ja lajin opetukseen saattoivat alulle matkatoimistomme Golfpassin.
                </p>
                <p>
                  "Eikös voitas treenata ja pelata seuraavan kerran jossakin ulkomailla", asiakkaat kysyivät, ja siitä se ajatus sitten lähti!
                </p>
              </div>

               {/* Box 2 */}
               <div className="meista-card">
                <div className="meista-icon-wrapper">
                  <Target className="meista-icon" />
                </div>
                <h3>Tavoitteemme</h3>
                <p>
                  Tavoitteemme on tuottaa laadukkaita ja nautinnollisia pelimatkoja sekä innostavia golfkursseja ja opetustunteja. Palvelemme ammattitaidolla ja iloisella mielellä. Henkilökohtainen palvelu on myös meidän ilomme!
                </p>
              </div>

               {/* Box 3 */}
               <div className="meista-card">
                <div className="meista-icon-wrapper">
                  <Users className="meista-icon" />
                </div>
                <h3>Opetustoiminta</h3>
                <p>
                  Golfpassi tarjoaa opetustoimintaa kesäisin Sastamalan Lakeside Golfissa ja Alastaro Golfissa. Kurssitarjontaa näillä golfklubeilla on läpi kesän rookiesta konkareihin.
                </p>
                <p>
                  Talvella treenaamaan pääsee tietysti ohjatuilla peli- ja opetusmatkoillamme PGA pro -opettajien johdolla.
                </p>
              </div>
            </div>
          </section>

           {/* Award Section */}
           <section className="meista-section">
            <div className="meista-card award-card">
              <h2 className="meista-section-title">Palkittu Matkanjärjestäjä</h2>
              <p>
                Maailmalla tunnustettu: Kolmatta kertaa järjestetyssä World Golf Awards -gaalassa vuonna 2016 Golfpassi Oy palkittiin Suomen parhaana ulkomaille suuntautuvien golfmatkojen järjestäjänä. Valitsijoina olivat golfalan ammattilaiset ympäri maailman. 
              </p>
              <p className="mt-4 font-semibold text-primary">
                Golfpassi – tärkein on aina mukana matkassa.
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
