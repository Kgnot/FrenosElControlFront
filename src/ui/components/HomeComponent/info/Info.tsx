import './Info.css';
import { MapPin, Phone, Smartphone, Mail } from 'lucide-react';

export const Info = () => {
    const contactInfo = [
        {
            icon: MapPin,
            label: 'Dirección',
            value: 'Calle 6A N°18-40 - Calle 6B N°18-35',
            type: 'address'
        },
        {
            icon: Phone,
            label: 'Teléfono',
            value: '2017520',
            type: 'phone'
        },
        {
            icon: Smartphone,
            label: 'Celular',
            value: '3202134797',
            type: 'phone'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'frenoselcontrolsas@hotmail.com',
            type: 'email'
        }
    ];

    return (
        <div className="info-container">
            <div className="info-header">
                <h4>Información de Contacto</h4>
            </div>
            <div className="info-content">
                {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className={`info-item ${item.type}`}>
                            <div className="info-icon">
                                <IconComponent size={18} />
                            </div>
                            <div className="info-details">
                                <span className="info-label">{item.label}</span>
                                <span className="info-value">{item.value}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};