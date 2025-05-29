
import './TitleHome.css';
import { Calendar, TrendingUp } from 'lucide-react';

export const TitleHome = () => {
    const currentDate = new Date().toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="title-home">
            <div className="title-content">
                <div className="title-text">
                    <h1>Dashboard</h1>
                    <p className="title-subtitle">Panel de control de Frenos El Control</p>
                    <div className="title-date">
                        <Calendar size={16} />
                        <span>{currentDate}</span>
                    </div>
                </div>
                <div className="title-logo">
                    <img src="/images/logo.png" alt="Logo Principal" />
                    {/*<div className="logo-glow"></div>*/}
                </div>
            </div>
            <div className="title-stats">
                <div className="stat-item">
                    <TrendingUp size={20} />
                    <span>Sistema en funcionamiento</span>
                </div>
            </div>
        </div>
    );
};