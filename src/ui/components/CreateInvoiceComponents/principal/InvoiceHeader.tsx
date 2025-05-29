import {Invoice} from "../../../../entity/Invoice.ts";

interface InvoiceHeaderProps {
    invoice?: Invoice;
}

export function InvoiceHeader({ invoice }: InvoiceHeaderProps) {
    return (
        <div className="invoice-title">
            <h2>
                {invoice ? 'Editar Factura' : 'Nueva Factura'}
            </h2>
        </div>
    );
}