import { Invoice } from "../../../../entity/Invoice";
import {InvoiceHeader} from "./InvoiceHeader.tsx";
import {InvoiceForm} from "../InvoiceForm/InvoiceForm.tsx";
import {InvoiceDetails} from "../InvoiceDetails/InvoiceDetails.tsx";

interface InvoiceFormSectionProps {
    invoice?: Invoice;
}

export function InvoiceFormSection({ invoice }: InvoiceFormSectionProps) {
    return (
        <div className="CREATEINVOICE_PAGE_sup">
            <div className="CREATEINVOICE_PAGE_sup_izq">
                <InvoiceHeader invoice={invoice} />
                <InvoiceDetails className="hijo" />
            </div>
            <InvoiceForm
                className="CREATEINVOICE_PAGE_sup_der hijo"
                invoice={invoice}
            />
        </div>
    );
}
