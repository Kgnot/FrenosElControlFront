import './ModifyModalInvoice.css'
import CreateInvoice from "../../../views/CreateInvoice.tsx";
import {Invoice} from "../../../../entity/Invoice.ts";

interface ModifyModalInvoiceProps {
    invoice: Invoice
}

export const ModifyModalInvoice = (
    {
        invoice
    }: ModifyModalInvoiceProps
) => {
    return (
        <article className={"article-modify-modal"}>

            <CreateInvoice invoice={invoice}/>

        </article>)
}