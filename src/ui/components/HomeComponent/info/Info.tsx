import './Info.css';

export const Info = ({ className }: { className: string }) => {
    return (
        <section className={`info-card ${className}`}>
            <p className="info-line">📍 Calle 6A N°18-40 - Calle 6B N°18-35</p>
            <p className="info-line">📞 Teléfono: 2017520</p>
            <p className="info-line">📱 Celular: 3202134797</p>
            <p className="info-line">
                ✉️ <a href="mailto:frenoselcontrolsas@hotmail.com" className="info-email">frenoselcontrolsas@hotmail.com</a>
            </p>
        </section>
    );
};
