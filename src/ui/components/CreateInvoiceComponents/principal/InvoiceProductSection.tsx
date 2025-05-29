import {ProductInsertInvoice} from "../productsInsertInvoice/ProductInsertInvoice.tsx";
import {Invoice} from "../../../../entity/Invoice.ts";

interface InvoiceProductsSectionProps {
    invoice?: Invoice;
}

export function InvoiceProductsSection({ invoice }: InvoiceProductsSectionProps) {
    return (
        <ProductInsertInvoice
            className="CREATEINVOICE_PAGE_inf hijo"
            invoice={invoice}
        />
    );
}
