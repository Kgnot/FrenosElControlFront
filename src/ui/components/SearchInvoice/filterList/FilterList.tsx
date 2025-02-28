import './FilterList.css'
import {FilterInvoice} from "../filter/FilterInvoice.tsx";


interface FilterListProps {
    className?: string;
    parentMethod: (name:string) => void
}

export const FilterList = ({className, parentMethod}: FilterListProps) => {

    const items: string[] = ["Fecha", "Mes", "Año", "Cliente", "ID Factura"]

    return (
        <div className={`filterList ${className}`}>
            {items.map(item => <FilterInvoice name={item} parentMethod={parentMethod}/>)}
        </div>
    )
}

