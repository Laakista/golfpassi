import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import "./BookingForm.css";

interface QuoteRequestFormProps {
    tripTitle: string;
}

interface QuoteFormData {
    // Personal Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    // Trip Details
    desiredTime: string;
    duration: number;
    numberOfTravelers: number;

    // Golf Information
    handicap: string;

    // Additional Details
    additionalNotes: string;
}

export function QuoteRequestForm({ tripTitle }: QuoteRequestFormProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<QuoteFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        desiredTime: "",
        duration: 14,
        numberOfTravelers: 1,
        handicap: "",
        additionalNotes: "",
    });

    const updateField = (field: keyof QuoteFormData, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
            case 2:
                return !!(formData.desiredTime && formData.duration > 0 && formData.numberOfTravelers > 0);
            case 3:
                return true; // All fields in step 3 are optional
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // In production, this would send to an API or email service
            console.log("Quote request submitted:", formData);
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="booking-form-success">
                <div className="success-icon-container">
                    <CheckCircle2 className="success-icon" />
                </div>
                <h3 className="success-title">Tarjouspyyntö lähetetty!</h3>
                <p className="success-message">
                    Kiitos tarjouspyynnöstäsi. Otamme sinuun yhteyttä pian räätälöidyn tarjouksen kanssa.
                </p>
                <p className="success-details">
                    Vahvistus on lähetetty osoitteeseen <strong>{formData.email}</strong>
                </p>
            </div>
        );
    }

    return (
        <div className="booking-form-container">
            {/* Progress Indicator */}
            <div className="progress-container">
                {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="progress-step">
                        <div
                            className={`progress-circle ${step < currentStep
                                    ? "progress-circle-completed"
                                    : step === currentStep
                                        ? "progress-circle-active"
                                        : "progress-circle-inactive"
                                }`}
                        >
                            {step < currentStep ? <CheckCircle2 className="w-4 h-4" /> : step}
                        </div>
                        {step < 4 && (
                            <div
                                className={`progress-line ${step < currentStep ? "progress-line-completed" : "progress-line-inactive"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                    <div className="form-step">
                        <h3 className="step-title">Henkilötiedot</h3>
                        <p className="step-description">Täytä yhteystietosi</p>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">Etunimi *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => updateField("firstName", e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName" className="form-label">Sukunimi *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => updateField("lastName", e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Sähköposti *</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Puhelinnumero *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Trip Details */}
                {currentStep === 2 && (
                    <div className="form-step">
                        <h3 className="step-title">Matkan tiedot</h3>
                        <p className="step-description">Kerro meille matkasi aikataulusta</p>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="desiredTime" className="form-label">Haluttu matkustusaika *</label>
                                <input
                                    type="text"
                                    id="desiredTime"
                                    value={formData.desiredTime}
                                    onChange={(e) => updateField("desiredTime", e.target.value)}
                                    className="form-input"
                                    placeholder="Esim. Tammikuu 2026, Kevät 2026"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="duration" className="form-label">Matkan kesto (vrk) *</label>
                                <input
                                    type="number"
                                    id="duration"
                                    value={formData.duration}
                                    onChange={(e) => updateField("duration", parseInt(e.target.value))}
                                    className="form-input"
                                    min="1"
                                    max="30"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numberOfTravelers" className="form-label">Matkustajien määrä *</label>
                                <input
                                    type="number"
                                    id="numberOfTravelers"
                                    value={formData.numberOfTravelers}
                                    onChange={(e) => updateField("numberOfTravelers", parseInt(e.target.value))}
                                    className="form-input"
                                    min="1"
                                    max="50"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Golf & Additional Details */}
                {currentStep === 3 && (
                    <div className="form-step">
                        <h3 className="step-title">Lisätiedot</h3>
                        <p className="step-description">Kerro meille lisää tarpeistasi</p>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="handicap" className="form-label">Tasoituksesi (valinnainen)</label>
                                <input
                                    type="text"
                                    id="handicap"
                                    value={formData.handicap}
                                    onChange={(e) => updateField("handicap", e.target.value)}
                                    className="form-input"
                                    placeholder="Esim. 18.5"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="additionalNotes" className="form-label">
                                Lisätiedot ja toiveet
                            </label>
                            <textarea
                                id="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={(e) => updateField("additionalNotes", e.target.value)}
                                className="form-textarea"
                                rows={12}
                                placeholder="Kerro meille tarkemmin toiveistasi: mitä haluaisit matkaan sisältyvän, erityistoiveet, rajoitteet, budjetti, jne."
                            />
                        </div>
                    </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                    <div className="form-step">
                        <h3 className="step-title">Tarkista tiedot</h3>
                        <p className="step-description">Varmista että tiedot ovat oikein ennen lähettämistä</p>

                        <div className="review-section">
                            <h4 className="review-section-title">Henkilötiedot</h4>
                            <div className="review-grid">
                                <div className="review-item">
                                    <span className="review-label">Nimi:</span>
                                    <span className="review-value">{formData.firstName} {formData.lastName}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Sähköposti:</span>
                                    <span className="review-value">{formData.email}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Puhelin:</span>
                                    <span className="review-value">{formData.phone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="review-section">
                            <h4 className="review-section-title">Matkan tiedot</h4>
                            <div className="review-grid">
                                <div className="review-item">
                                    <span className="review-label">Matka:</span>
                                    <span className="review-value">{tripTitle}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Haluttu aika:</span>
                                    <span className="review-value">{formData.desiredTime}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Kesto:</span>
                                    <span className="review-value">{formData.duration} vrk</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Matkustajia:</span>
                                    <span className="review-value">{formData.numberOfTravelers}</span>
                                </div>
                                {formData.handicap && (
                                    <div className="review-item">
                                        <span className="review-label">Tasoitus:</span>
                                        <span className="review-value">{formData.handicap}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {formData.additionalNotes && (
                            <div className="review-section">
                                <h4 className="review-section-title">Lisätiedot</h4>
                                <p className="review-special-requests">{formData.additionalNotes}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="form-actions">
                    {currentStep > 1 && (
                        <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            size="lg"
                            className="form-button-back"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Takaisin
                        </Button>
                    )}

                    {currentStep < 4 ? (
                        <Button
                            type="button"
                            onClick={nextStep}
                            variant="hero"
                            size="lg"
                            className="form-button-next"
                            disabled={!validateStep(currentStep)}
                        >
                            Jatka
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            variant="hero"
                            size="lg"
                            className="form-button-submit"
                        >
                            Lähetä tarjouspyyntö
                            <CheckCircle2 className="w-5 h-5 ml-2" />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}
