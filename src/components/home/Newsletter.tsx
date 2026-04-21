import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Newsletter.css";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-label">
            Pysy kuulolla
          </span>
          <h2 className="newsletter-title">
            Tilaa uutiskirje
          </h2>
          <p className="newsletter-description">
            Näe parhaat matkatarjoukset ensimmäisten joukossa!
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sähköpostiosoitteesi"
                className="newsletter-input"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="newsletter-submit-button">
                <Send className="w-5 h-5 mr-2" />
                Tilaa
              </Button>
            </form>
          ) : (
            <div className="newsletter-success">
              <div className="success-icon-wrapper">
                <Check className="success-icon-svg" />
              </div>
              <p className="success-message-text">Kiitos tilauksestasi!</p>
            </div>
          )}

          <p className="newsletter-disclaimer">
            Emme jaa tietojasi kolmansille osapuolille.
          </p>
        </div>
      </div>
    </section>
  );
}
