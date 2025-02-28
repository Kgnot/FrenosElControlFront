import './FilterInvoice.css'
import {useState} from "react";


interface FilterInvoiceProps {
    className?: string;
    name: string;
    parentMethod: (name: string) => void
}

export const FilterInvoice = ({ className, name, parentMethod }: FilterInvoiceProps) => {
    const [isPushed, setIsPushed] = useState(false);

    const handleClick = () => {
        parentMethod(name);
        setIsPushed(!isPushed);
    };

    return (
        <button
            className={`${className} filterInvoice ${isPushed ? "push" : ""}`}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

