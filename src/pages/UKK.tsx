import { useState } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./UKK.css";

const faqData = [
  {
    category: "Varaaminen",
    questions: [
      {
        q: "Miten varaan matkan?",
        a: "Voit varata matkan suoraan verkkosivuiltamme klikkaamalla haluamasi matkan 'Varaa nyt' -painiketta. Voit myös soittaa asiakaspalveluumme numeroon 03 515 1007 arkisin klo 9-16.",
      },
      {
        q: "Milloin matka on vahvistettu?",
        a: "Matka on vahvistettu, kun olet maksanut varausmaksun ja saanut meiltä vahvistuksen sähköpostitse. Varausmaksun suuruus on yleensä 300-500 € per henkilö.",
      },
      {
        q: "Voinko peruuttaa matkani?",
        a: "Kyllä, matkoja voi peruuttaa matkaehtojemme mukaisesti. Peruutusehdot riippuvat ajankohdasta ja matkakohteesta. Suosittelemme matkavakuutuksen hankkimista.",
      },
    ],
  },
  {
    category: "Matkat ja kohteet",
    questions: [
      {
        q: "Mitä matkahinta sisältää?",
        a: "Matkahinta sisältää tyypillisesti lennot, majoituksen, kuljetukset kohteessa, green fee -maksut sovittujen kierrosten osalta sekä suomalaisen vetäjän palvelut. Tarkista kunkin matkan kohdalta tarkat sisällöt.",
      },
      {
        q: "Tarvitsenko omia golfmailoja?",
        a: "Omat mailat kannattaa ottaa mukaan, mutta useimmissa kohteissa on mahdollista vuokrata mailat. Vuokramailoista ilmoitetaan kunkin kohteen tiedoissa.",
      },
      {
        q: "Mikä on ryhmäkoko?",
        a: "Ryhmäkoot vaihtelevat yleensä 12-24 henkilön välillä. Pienissä ryhmissä varmistamme henkilökohtaisen palvelun ja hyvän ilmapiirin.",
      },
    ],
  },
  {
    category: "Lentäminen ja kuljetukset",
    questions: [
      {
        q: "Mistä lennetään?",
        a: "Lennot lähtevät pääsääntöisesti Helsinki-Vantaan lentoasemalta. Joissakin tapauksissa on mahdollista järjestää jatkoyhteys muualta Suomesta.",
      },
      {
        q: "Paljonko golfbägi saa painaa?",
        a: "Golfbägin painoraja vaihtelee lentoyhtiöittäin, tyypillisesti 15-23 kg. Tarkista painoraja aina varausvahvistuksesta.",
      },
    ],
  },
  {
    category: "Maksaminen",
    questions: [
      {
        q: "Millä voin maksaa?",
        a: "Hyväksymme maksun verkkopankilla, luottokortilla sekä laskulla. Maksuohjeet saat varausvahvistuksen yhteydessä.",
      },
      {
        q: "Voinko maksaa osamaksulla?",
        a: "Kyllä, matkan voi maksaa osamaksulla. Varausmaksu maksetaan varauksen yhteydessä ja loppumaksu erääntyy tyypillisesti 6-8 viikkoa ennen matkaa.",
      },
    ],
  },
];

export default function UKK() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaq = faqData.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="ukk-page">
      <Header />
      <main className="ukk-main">
        <div className="ukk-container">
          {/* Hero */}
          <div className="ukk-hero">
            <h1 className="ukk-title">
              Usein kysytyt kysymykset
            </h1>
            <p className="ukk-description">
              Löydä vastaukset yleisimpiin kysymyksiin golfmatkoistamme.
            </p>
          </div>

          {/* Search */}
          <div className="ukk-search-container">
            <div className="ukk-search-wrapper">
              <Search className="ukk-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hae kysymyksistä..."
                className="ukk-search-input"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="ukk-faq-container">
            {filteredFaq.length > 0 ? (
              filteredFaq.map((category) => (
                <div key={category.category}>
                  <h2 className="ukk-category-title">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="ukk-accordion-list">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="ukk-accordion-item"
                      >
                        <AccordionTrigger className="ukk-accordion-trigger">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="ukk-accordion-content">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="ukk-no-results">
                <p className="ukk-no-results-text">
                  Ei hakutuloksia. Kokeile toista hakusanaa.
                </p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="ukk-contact-cta">
            <h3 className="ukk-contact-title">
              Etkö löytänyt vastausta?
            </h3>
            <p className="ukk-contact-text">
              Ota yhteyttä asiakaspalveluumme, autamme mielellämme!
            </p>
            <a
              href="tel:+35835151007"
              className="ukk-contact-link"
            >
              03 515 1007
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
