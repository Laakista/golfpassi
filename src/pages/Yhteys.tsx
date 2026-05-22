import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import "./Yhteys.css";

type ContactType = "palaute" | "tiedustelu" | "muu";

const contactTypes: { value: ContactType; label: string }[] = [
  { value: "palaute", label: "Palaute" },
  { value: "tiedustelu", label: "Tiedustelu" },
  { value: "muu", label: "Muu" },
];

const contactPersons = [
  {
    name: "Juha Passi",
    role: "CEO & PGA Pro",
    email: "juha.passi@golfpassi.fi",
    phone: "+358 400 634 130",
    image: "/people/Juha-Passi-800x800-1-480x480.jpg"
  },
  {
    name: "Hanna Urrila",
    role: "COO & Partner",
    email: "hanna.urrila@golfpassi.fi",
    phone: "+358 40 515 8063",
    image: "/people/Hanna-Urrila-800x800-2-480x480.jpg"
  },
  {
    name: "Mia Kanerva",
    role: "Sales & Product Executive",
    email: "mia.kanerva@golfpassi.fi",
    phone: "+358 40 8472721",
    phone2: "+358 3 515 1007",
    image: "/people/Mia-Kanerva-800x800-1-480x480.jpg"
  },
  {
    name: "Kasper Virta",
    role: "Sales & Production",
    email: "kasper.virta@golfpassi.fi",
    phone: "+358 40 624 5442",
    image: "/people/Kasper-Virta-800x800-2-480x480.jpg"
  },
  {
    name: "Lotta Mykkänen",
    role: "Sales & Production",
    email: "lotta.mykkanen@golfpassi.fi",
    phone: "+358 40 847 8129",
    image: "/people/Lotta-Mykkanen-1-480x480.jpg"
  },
  {
    name: "Minna Lintukangas",
    role: "Group Sales & Production",
    email: "minna.lintukangas@golfpassi.fi",
    phone: "+358 50 073 7791",
    image: "/people/Minna-Lintukangas-800x800-1-480x480.jpg"
  },
  {
    name: "Arja Salahetdin",
    role: "Flight Service Manager",
    email: "",
    phone: "",
    image: "/people/Arja-Salahetdin-800x800-1-480x480.jpg"
  },
  {
    name: "Teemu Keskinen",
    role: "Sales & Customer Service",
    email: "toimisto@golfpassi.fi",
    phone: "+358 3 515 1007",
    image: "/people/Teemu-Keskinen-800x800-1-480x480.jpg"
  },
  {
    name: "Mandi Plith",
    role: "Sales & Customer Service",
    email: "toimisto@golfpassi.fi",
    phone: "+358 3 515 1007",
    image: "/people/Mandi-Plith-800x800-1-480x480.jpg"
  },
  {
    name: "Tuula Urrila-Koppanen",
    role: "Sales & Customer Service",
    email: "toimisto@golfpassi.fi",
    phone: "+358 3 515 1007",
    image: "/people/Tuula2-480x480.jpg"
  },
  {
    name: "Jani Kinnunen",
    role: "Marketing Specialist",
    email: "jani.kinnunen@golfpassi.fi",
    phone: "+358 3 515 1007",
    image: "/people/jani-kinnunen-413x480.jpg"
  },
  {
    name: "Annamari Viita",
    role: "Graphic Designer / Marketing",
    email: "annamari.viita@golfpassi.fi",
    phone: "+358 3 515 1007",
    image: "/people/Annamari-viita-800x800-1-480x480.jpg"
  }
];

export default function Yhteys() {
  const [contactType, setContactType] = useState<ContactType>("tiedustelu");
  const [submitted, setSubmitted] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    // Additional fields for specific types
    tripDestination: "",
    travelDates: "",
    groupSize: "",
    bookingNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="yhteys-page">
      <Header />
      <main className="yhteys-main pt-40">
        <div className="yhteys-container">
          {/* Hero */}
          <div className="yhteys-hero mb-16">
            <h1 className="yhteys-title">
              Ota yhteyttä
            </h1>
            <p className="yhteys-description">
              Autamme mielellämme kaikissa golfmatkoja koskevissa kysymyksissä.
            </p>
          </div>

          <div className="yhteys-grid">
            {/* Contact Info & Map */}
            <div className="yhteys-info-map-column flex flex-col h-full">
              <div className="yhteys-info-card">
                <h3 className="yhteys-card-title">
                  Yhteystiedot
                </h3>
                <div className="yhteys-info-list">
                  <a
                    href="tel:+35835151007"
                    className="yhteys-info-item"
                  >
                    <div className="yhteys-icon-box icon-box-primary">
                      <Phone className="icon-primary" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Puhelin</p>
                      <p className="yhteys-info-value">03 515 1007</p>
                    </div>
                  </a>
                  <a
                    href="mailto:toimisto@golfpassi.fi"
                    className="yhteys-info-item"
                  >
                    <div className="yhteys-icon-box icon-box-secondary">
                      <Mail className="icon-secondary" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Sähköposti</p>
                      <p className="yhteys-info-value">toimisto@golfpassi.fi</p>
                    </div>
                  </a>
                  <div className="yhteys-info-item">
                    <div className="yhteys-icon-box icon-box-purple">
                      <Clock className="icon-purple" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Toimisto palvelee</p>
                      <p className="yhteys-info-value">Ma-Pe 9:00-16:00</p>
                    </div>
                  </div>
                  <div className="yhteys-info-item">
                    <div className="yhteys-icon-box icon-box-golf">
                      <MapPin className="icon-golf" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Osoite</p>
                      <p className="yhteys-info-value">Tupurlantie 7, 38420 Sastamala</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="yhteys-map-wrapper flex-grow min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.6521364505036!2d23.0035544!3d61.3414988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4688cf6473f32c3f%3A0x7d6a5d7d3d7d7d7d!2sTupurlantie%207%2C%2038420%20Sastamala!5e0!3m2!1sfi!2sfi!4v1715850000000!5m2!1sfi!2sfi"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form & Contact Persons */}
            <div className="yhteys-form-container space-y-8">
              <div className="yhteys-form-card">
                {!submitted ? (
                  <>
                    <h3 className="yhteys-card-title">
                      Lähetä viesti
                    </h3>

                    {/* Contact Type Selector */}
                    <div className="yhteys-type-selector">
                      {contactTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setContactType(type.value)}
                          className={`yhteys-type-button ${contactType === type.value
                            ? "type-button-active"
                            : "type-button-inactive"
                            }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="yhteys-form">
                      {/* Basic fields */}
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="form-label">
                            Nimi *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">
                            Sähköposti *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Puhelin
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      {/* Conditional fields are removed */}

                      <div className="form-group">
                        <label className="form-label">
                          Aihe
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Viesti *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={8}
                          className="form-textarea"
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Lähetä viesti
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="yhteys-success">
                    <div className="success-icon-box">
                      <Check className="success-icon" />
                    </div>
                    <h3 className="success-title">
                      Kiitos viestistäsi!
                    </h3>
                    <p className="success-text">
                      Vastaamme sinulle mahdollisimman pian.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          <div id="yhteyshenkilot" className="yhteys-persons-section">
            <h2 className="yhteys-section-title text-center">Yhteyshenkilöt</h2>
            <div className="yhteys-persons-grid">
              {contactPersons.map((person, index) => (
                <div key={index} className="contact-person-card">
                  <div className="person-image-wrapper">
                    {person.image && !imageErrors[index] ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="person-image"
                        onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                      />
                    ) : (
                      <div className="person-placeholder">
                        {person.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                  </div>
                  <div className="person-info">
                    <h3 className="person-name">{person.name}</h3>
                    <p className="person-role">{person.role}</p>
                    <div className="person-contacts">
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="person-contact-link email">
                          {person.email}
                        </a>
                      )}
                      {person.phone && (
                        <a href={`tel:${person.phone.replace(/\s+/g, '')}`} className="person-contact-link phone">
                          {person.phone}
                        </a>
                      )}
                      {person.phone2 && (
                        <a href={`tel:${person.phone2.replace(/\s+/g, '')}`} className="person-contact-link phone">
                          {person.phone2}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
