import './styles/CreateInvoice.css'
import {CustomerForm} from "../components/CreateInvoiceComponents/CustomerForm/CustomerForm.tsx";
import {InvoiceDetails} from "../components/CreateInvoiceComponents/InvoiceDetails/InvoiceDetails.tsx";

import {useForm, FormProvider} from 'react-hook-form'
import {CustomerFormValues, schema} from "../../form/CustomerForm.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    ProductInsertInvoice
} from "../components/CreateInvoiceComponents/productsInsertInvoice/ProductInsertInvoice.tsx";

export default function CreateInvoice() {
    const methods = useForm<CustomerFormValues>({
        resolver: zodResolver(schema)
    });


    return (
        <FormProvider {...methods}>
            <section className={"CREATEINVOICE_PAGE PAGE "}>
                <div className={"CREATEINVOICE_PAGE_sup "}>
                    <CustomerForm className={"CREATEINVOICE_PAGE_sup_izq hijo"}/>
                    <InvoiceDetails className={"CREATEINVOICE_PAGE_sup_der hijo"}/>
                </div>
                <ProductInsertInvoice className={"CREATEINVOICE_PAGE_inf hijo"}/>
            </section>
        </FormProvider>
    )
}
