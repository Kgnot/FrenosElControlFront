import './InvoiceDetails.css'
import {SubmitButton} from "../submitButton/SubmitButton.tsx";
import {CheckBoxDetails} from "./state/CheckBoxDetails.tsx";

export const InvoiceDetails = ({className}: { className: string }) => {

    return (
        <section className={`invoiceDetails ${className}`}>
            <h2> Detalles Factura</h2>
            <div className={"detailsInvoice"}>
                <CheckBoxDetails
                    title="Estado de la factura"
                    check1="Completado"
                    check2="En espera"
                    groupName="estadoFactura"
                />
                <CheckBoxDetails
                    title="Tamaño de la factura"
                    check1="Hoja completa"
                    check2="Media hoja"
                    groupName="tamanoFactura"
                />
            </div>
            <div className={"invoiceButtons"}>
                <SubmitButton/>
                <button> Previsualizar Factura</button>
            </div>
        </section>
    )
}