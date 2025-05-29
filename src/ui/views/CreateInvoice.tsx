import './styles/CreateInvoice.css'
import {useForm, FormProvider} from 'react-hook-form'
import {InvoiceFormValues, schema} from "../../form/InvoiceForm.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Invoice} from "../../entity/Invoice.ts";
import {InvoiceFormSection} from "../components/CreateInvoiceComponents/principal/InvoiceFormSection.tsx";
import {InvoiceProductsSection} from "../components/CreateInvoiceComponents/principal/InvoiceProductSection.tsx";

interface CreationInvoiceProps {
    invoice?: Invoice
}

export default function CreateInvoice({ invoice }: CreationInvoiceProps) {
    const methods = useForm<InvoiceFormValues>({
        resolver: zodResolver(schema)
    });

    return (
        <FormProvider {...methods}>
            <section className="CREATEINVOICE_PAGE PAGE">
                <InvoiceFormSection invoice={invoice} />
                <InvoiceProductsSection invoice={invoice} />
            </section>
        </FormProvider>
    );
}
