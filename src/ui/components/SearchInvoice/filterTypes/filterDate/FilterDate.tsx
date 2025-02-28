import { useState } from "react";
import { DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

interface FilterDateProps {
    className: string;
}

export const FilterDate = ({ className }:FilterDateProps) => {
    const [startDate, setStartDate] = useState<Date|null>(null);

    const handleDateChange =(date: Date | null) => {
        setStartDate(date);
    };

    return (
        <div className={className}>
            <span> Fecha: </span>
            <DatePicker
                value={startDate}
                onChange={handleDateChange}
                format="dd/MM/yyyy" // Formato de fecha
                placeholder="Selecciona una fecha"
                cleanable // Permite borrar la fecha
                style={{width: 200}} // Estilos inline
            />
        </div>
    );
};