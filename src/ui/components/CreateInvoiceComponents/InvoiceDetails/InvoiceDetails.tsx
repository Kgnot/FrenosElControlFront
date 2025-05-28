import './InvoiceDetails.css'
import {CheckBoxDetails} from "./state/CheckBoxDetails.tsx";
import {useState} from "react";
import {InvoicePreviewer} from "./component/InvoicePreviewer.tsx";
import {BlackModal} from "../../utils/modal/BalckModal.tsx";
import {ButtonType1, ButtonType2} from '../../utils/buttons/index.ts';


export const InvoiceDetails = ({className}: { className: string }) => {
    const [showModal, setShowModal] = useState(false);

    const closePreview = () => {
        // if (pdfUrl) URL.revokeObjectURL(pdfUrl); // limpia memoria
        setShowModal(false);
        // setPdfUrl(null);
    };

    const generateInvoice = () => {
        setShowModal(!showModal);
        console.log("Generando factura");
    }


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
                <ButtonType1 parentMethod={generateInvoice}>
                    Generar Factura
                </ButtonType1>
                {/*Boton para mostrar la factura*/}
                <ButtonType2 parentMethod={() => setShowModal(!showModal)}>
                    Previsualizar Factura
                </ButtonType2>
            </div>

            {/*Apartado del modal*/}
            <BlackModal
                visible={showModal}
                onClose={closePreview}>
                <InvoicePreviewer onClose={closePreview} pdfUrl={""}/>
            </BlackModal>
        </section>
    )
}