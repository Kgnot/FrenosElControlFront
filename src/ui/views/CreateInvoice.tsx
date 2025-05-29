import './styles/CreateInvoice.css'
import {InvoiceForm} from "../components/CreateInvoiceComponents/InvoiceForm/InvoiceForm.tsx";
import {InvoiceDetails} from "../components/CreateInvoiceComponents/InvoiceDetails/InvoiceDetails.tsx";

import {useForm, FormProvider} from 'react-hook-form'
import {InvoiceFormValues, schema} from "../../form/InvoiceForm.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    ProductInsertInvoice
} from "../components/CreateInvoiceComponents/productsInsertInvoice/ProductInsertInvoice.tsx";

export default function CreateInvoice() {

    const methods = useForm<InvoiceFormValues>({
        resolver: zodResolver(schema)
    });
    // Aqui nosotros tenemos el Form como un useForm



    return (
        <FormProvider {...methods}>
            <section className={"CREATEINVOICE_PAGE PAGE "}>
                <div className={"CREATEINVOICE_PAGE_sup "}>
                    <InvoiceForm className={"CREATEINVOICE_PAGE_sup_izq hijo"}/>
                    <InvoiceDetails className={"CREATEINVOICE_PAGE_sup_der hijo"}/>
                </div>
                <ProductInsertInvoice className={"CREATEINVOICE_PAGE_inf hijo"}/>
            </section>
        </FormProvider>
    )
}
