import './FilterInvoice.css'


interface FilterInvoiceProps {
    className?: string;
    name: string;
    parentMethod: (name: string) => void
}

export const FilterInvoice = ({className, name, parentMethod}: FilterInvoiceProps) => {
    return (
        <button className={`${className} filterInvoice`}
                onClick={() => parentMethod(name)}
        >
            {name}
        </button>
    )
}

