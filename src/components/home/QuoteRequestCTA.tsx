import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./QuoteRequestCTA.css";

interface QuoteRequestCTAProps {
  /** Optional heading label. Defaults to "Räätälöity matka" */
  label?: string;
  /** Optional main title. Defaults to generic. */
  title?: string;
  /** Optional description text. */
  description?: string;
}

export function QuoteRequestCTA({
  label = "Räätälöity matka",
  title = "Haluatko oman porukan golfmatkan?",
  description = "Kerro meille toiveistasi, niin räätälöimme teille täydellisen golfmatkan – kohde, ajankohta ja sisältö juuri teidän näköisenä.",
}: QuoteRequestCTAProps) {
  return (
    <section className="quote-cta-section">
      <div className="quote-cta-container">
        <div className="quote-cta-content">
          <span className="quote-cta-label">{label}</span>
          <h2 className="quote-cta-title">{title}</h2>
          <p className="quote-cta-description">{description}</p>

          <Link to="/pyyda-tarjous" className="quote-cta-button">
            Pyydä tarjous
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="quote-cta-disclaimer">
            Palvelumme on maksuton eikä sido sinua mihinkään.
          </p>
        </div>
      </div>
    </section>
  );
}
