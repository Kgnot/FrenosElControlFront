
import './InvoiceDetails.css';
import { CheckBoxDetails } from "./state/CheckBoxDetails.tsx";
import { useState } from "react";
import { InvoicePreviewer } from "./component/InvoicePreviewer.tsx";
import { BlackModal } from "../../utils/modal/BalckModal.tsx";
import { ButtonType1, ButtonType2 } from '../../utils/buttons';

interface InvoiceDetailsProps {
    className?: string;
    isGenerating?: boolean;
    onGenerate?: () => void;
}

export const InvoiceDetails = ({
                                   className = "",
                                   isGenerating = false,
                                   onGenerate
                               }: InvoiceDetailsProps) => {
    const [showModal, setShowModal] = useState(false);

    const closePreview = () => {
        setShowModal(false);
    };

    const handleGenerateInvoice = () => {
        if (isGenerating) return;

        console.log("Generando factura");
        setShowModal(true); // También abre el modal
        onGenerate?.();
    };

    const handlePreviewInvoice = () => {
        setShowModal(true);
    };

    return (
        <section className={`invoice-details ${className}`}>
            <header className="invoice-details-header">
                <h2>Detalles de la Factura</h2>
                <p>Configure las opciones de generación</p>
            </header>

            <div className="invoice-options">
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

            <div className="invoice-actions">
                <ButtonType1
                    parentMethod={handleGenerateInvoice}
                    // disabled={isGenerating}
                >
                    {isGenerating ? 'Generando...' : 'Generar Factura'}
                </ButtonType1>

                <ButtonType2 parentMethod={handlePreviewInvoice}>
                    Previsualizar
                </ButtonType2>
            </div>

            <BlackModal
                visible={showModal}
                onClose={closePreview}
            >
                <InvoicePreviewer
                    onClose={closePreview}
                    pdfUrl=""
                />
            </BlackModal>
        </section>
    );
};