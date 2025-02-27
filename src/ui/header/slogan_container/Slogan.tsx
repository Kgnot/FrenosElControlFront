import './Slogan.css'
import { useState, useEffect } from "react";

export const Slogan = ({ className }: { className: string }) => {
    const sloganText = "frenos el control";
    const [waveTrigger, setWaveTrigger] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setWaveTrigger(true);

            setTimeout(() => setWaveTrigger(false), 3000); // Reinicia después de 2 segundos
        }, 10000); // Cada 4 segundos lanza la ola

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`slogan ${className}`}>
            {sloganText.split("").map((char, index) => (
                <span
                    key={index}
                    className={waveTrigger ? `wave wave-${index}` : ""}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

