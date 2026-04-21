import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import "./BookingForm.css";

interface BookingFormProps {
    tripTitle: string;
    tripDates: string[];
    priceDouble: number;
    priceSingle: number;
}

interface FormData {
    // Step 1: Personal Information
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    // Step 2: Trip Details
    departureDate: string;
    roomType: "double" | "single";
    numberOfPersons: number;

    // Step 3: Additional Requests
    specialRequests: string;
}

export function BookingForm({ tripTitle, tripDates, priceDouble, priceSingle }: BookingFormProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        departureDate: tripDates[0] || "",
        roomType: "double",
        numberOfPersons: 1,
        specialRequests: "",
    });

    const updateField = (field: keyof FormData, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
            case 2:
                return !!(formData.departureDate && formData.numberOfPersons > 0);
            case 3:
                return true; // Special requests are optional
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
            console.log("Form submitted:", formData);
            setSubmitted(true);
        }
    };

    const selectedPrice = formData.roomType === "double" ? priceDouble : priceSingle;
    const totalPrice = selectedPrice * formData.numberOfPersons;

    if (submitted) {
        return (
            <div className="booking-form-success">
                <div className="success-icon-container">
                    <CheckCircle2 className="success-icon" />
                </div>
                <h3 className="success-title">Varaus lähetetty!</h3>
                <p className="success-message">
                    Kiitos varauksestasi. Otamme sinuun yhteyttä pian vahvistaaksemme matkasi.
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
                        <p className="step-description">Valitse lähtöpäivä ja huonetyyppi</p>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="departureDate" className="form-label">Lähtöpäivä *</label>
                                <select
                                    id="departureDate"
                                    value={formData.departureDate}
                                    onChange={(e) => updateField("departureDate", e.target.value)}
                                    className="form-select"
                                    required
                                >
                                    {tripDates.map((date) => (
                                        <option key={date} value={date}>
                                            {date}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="roomType" className="form-label">Huonetyyppi *</label>
                                <select
                                    id="roomType"
                                    value={formData.roomType}
                                    onChange={(e) => updateField("roomType", e.target.value as "double" | "single")}
                                    className="form-select"
                                    required
                                >
                                    <option value="double">Kahden hengen huone ({priceDouble} € /hlö)</option>
                                    <option value="single">Yhden hengen huone ({priceSingle} € /hlö)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="numberOfPersons" className="form-label">Henkilöiden määrä *</label>
                                <input
                                    type="number"
                                    id="numberOfPersons"
                                    value={formData.numberOfPersons}
                                    onChange={(e) => updateField("numberOfPersons", parseInt(e.target.value))}
                                    className="form-input"
                                    min="1"
                                    max="10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="price-summary">
                            <div className="price-summary-row">
                                <span>Hinta per henkilö:</span>
                                <span className="price-summary-amount">{selectedPrice} €</span>
                            </div>
                            <div className="price-summary-row price-summary-total">
                                <span>Kokonaishinta:</span>
                                <span className="price-summary-amount">{totalPrice} €</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Additional Requests */}
                {currentStep === 3 && (
                    <div className="form-step">
                        <h3 className="step-title">Lisätiedot</h3>
                        <p className="step-description">Kerro meille erityistoiveistasi (valinnainen)</p>

                        <div className="form-group">
                            <label htmlFor="specialRequests" className="form-label">
                                Erityistoiveet tai lisätiedot
                            </label>
                            <textarea
                                id="specialRequests"
                                value={formData.specialRequests}
                                onChange={(e) => updateField("specialRequests", e.target.value)}
                                className="form-textarea"
                                rows={6}
                                placeholder="Esim. ruoka-aineallergiat, liikkumisrajoitteet, erityisjärjestelyt..."
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
                                    <span className="review-label">Lähtöpäivä:</span>
                                    <span className="review-value">{formData.departureDate}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Huonetyyppi:</span>
                                    <span className="review-value">
                                        {formData.roomType === "double" ? "Kahden hengen huone" : "Yhden hengen huone"}
                                    </span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Henkilömäärä:</span>
                                    <span className="review-value">{formData.numberOfPersons}</span>
                                </div>
                                <div className="review-item">
                                    <span className="review-label">Kokonaishinta:</span>
                                    <span className="review-value review-price">{totalPrice} €</span>
                                </div>
                            </div>
                        </div>

                        {formData.specialRequests && (
                            <div className="review-section">
                                <h4 className="review-section-title">Lisätiedot</h4>
                                <p className="review-special-requests">{formData.specialRequests}</p>
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
                            Lähetä varaus
                            <CheckCircle2 className="w-5 h-5 ml-2" />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}
