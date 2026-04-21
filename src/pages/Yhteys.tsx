import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import "./Yhteys.css";

type ContactType = "palaute" | "tarjouspyynto" | "tiedustelu" | "tukipyynto";

const contactTypes: { value: ContactType; label: string }[] = [
  { value: "palaute", label: "Palaute" },
  { value: "tarjouspyynto", label: "Tarjouspyyntö" },
  { value: "tiedustelu", label: "Tiedustelu" },
  { value: "tukipyynto", label: "Tukipyyntö" },
];

export default function Yhteys() {
  const [contactType, setContactType] = useState<ContactType>("tiedustelu");
  const [submitted, setSubmitted] = useState(false);
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
      <main className="yhteys-main">
        <div className="yhteys-container">
          {/* Hero */}
          <div className="yhteys-hero">
            <h1 className="yhteys-title">
              Ota yhteyttä
            </h1>
            <p className="yhteys-description">
              Autamme mielellämme kaikissa golfmatkoja koskevissa kysymyksissä.
            </p>
          </div>

          <div className="yhteys-grid">
            {/* Contact Info */}
            <div className="space-y-6">
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
                    <div className="yhteys-icon-box icon-box-golf">
                      <MapPin className="icon-golf" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Osoite</p>
                      <p className="yhteys-info-value">Tampere, Finland</p>
                    </div>
                  </div>
                  <div className="yhteys-info-item">
                    <div className="yhteys-icon-box icon-box-turquoise">
                      <Clock className="icon-turquoise" />
                    </div>
                    <div>
                      <p className="yhteys-info-label">Aukioloajat</p>
                      <p className="yhteys-info-value">Ma-Pe 9:00-16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="yhteys-form-container">
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

                      {/* Conditional fields based on contact type */}
                      {contactType === "tarjouspyynto" && (
                        <div className="form-grid-3">
                          <div className="form-group">
                            <label className="form-label">
                              Kohde
                            </label>
                            <input
                              type="text"
                              name="tripDestination"
                              value={formData.tripDestination}
                              onChange={handleChange}
                              placeholder="Esim. Kreikka"
                              className="form-input"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Ajankohta
                            </label>
                            <input
                              type="text"
                              name="travelDates"
                              value={formData.travelDates}
                              onChange={handleChange}
                              placeholder="Esim. Maaliskuu 2026"
                              className="form-input"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Ryhmäkoko
                            </label>
                            <input
                              type="text"
                              name="groupSize"
                              value={formData.groupSize}
                              onChange={handleChange}
                              placeholder="Esim. 4 henkilöä"
                              className="form-input"
                            />
                          </div>
                        </div>
                      )}

                      {contactType === "tukipyynto" && (
                        <div className="form-group">
                          <label className="form-label">
                            Varausnumero
                          </label>
                          <input
                            type="text"
                            name="bookingNumber"
                            value={formData.bookingNumber}
                            onChange={handleChange}
                            placeholder="Esim. GP2024-1234"
                            className="form-input"
                          />
                        </div>
                      )}

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
                          rows={5}
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
