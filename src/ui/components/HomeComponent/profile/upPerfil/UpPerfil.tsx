
import './UpPerfil.css';
import { User, MapPin } from 'lucide-react';

export const UpPerfil = () => {
    return (
        <div className="up-perfil">
            <div className="profile-background">
                <div className="profile-pattern"></div>
            </div>

            <div className="profile-content">
                <div className="profile-avatar">
                    <img src="./images/profile.webp" alt="Foto de perfil" />
                    <div className="avatar-status"></div>
                </div>

                <div className="profile-info">
                    <div className="welcome-text">
                        <User size={16} />
                        <span>¡Bienvenida/o de nuevo!</span>
                    </div>
                    <h4>Omaira Amaya</h4>
                    <div className="profile-role">
                        <MapPin size={14} />
                        <span>Administradora</span>
                    </div>
                </div>
            </div>
        </div>
    );
};