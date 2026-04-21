import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CalendarView.css';

interface Trip {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    price: string;
    href: string;
    location: string;
}

interface CalendarViewProps {
    trips: Trip[];
}

export const CalendarView: React.FC<CalendarViewProps> = ({ trips }) => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // Default to March 2026

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const monthNames = [
        "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu",
        "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
    ];

    const days = [];
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    // Adjust startDay for Monday start (0 = Monday, 6 = Sunday)
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

    // Empty slots before the first day
    for (let i = 0; i < adjustedStartDay; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let d = 1; d <= totalDays; d++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dayTrips = trips.filter(trip => trip.startDate === dateStr);

        days.push(
            <div key={d} className="calendar-day">
                <span className="day-number">{d}</span>
                <div className="day-dots">
                    {dayTrips.map(trip => (
                        <div key={trip.id} className="trip-dot-container">
                            <div className="trip-dot"></div>
                            <div className="trip-tooltip">
                                <div className="tooltip-content">
                                    <h4 className="tooltip-title">{trip.title}</h4>
                                    <p className="tooltip-location">{trip.location}</p>
                                    <p className="tooltip-price">alk. {trip.price} €</p>
                                    <Link to={trip.href} className="tooltip-link">Katso matka</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="calendar-view">
            <div className="calendar-header">
                <button onClick={prevMonth} className="calendar-nav-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2 className="calendar-month-year">
                    {monthNames[month]} {year}
                </h2>
                <button onClick={nextMonth} className="calendar-nav-btn">
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="calendar-grid">
                <div className="calendar-weekday">Ma</div>
                <div className="calendar-weekday">Ti</div>
                <div className="calendar-weekday">Ke</div>
                <div className="calendar-weekday">To</div>
                <div className="calendar-weekday">Pe</div>
                <div className="calendar-weekday">La</div>
                <div className="calendar-weekday">Su</div>
                {days}
            </div>
        </div>
    );
};
