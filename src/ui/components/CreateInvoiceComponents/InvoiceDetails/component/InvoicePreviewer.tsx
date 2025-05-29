import './InvoicePreviewer.css';
import { ButtonType1 } from '../../../utils/buttons';

interface Props {
    onClose: () => void;
    pdfUrl?: string; // URL del PDF para mostrar
}

export const InvoicePreviewer = ({ onClose, pdfUrl }: Props) => {
    return (
        <section className="InvoicePreviewer">
            <div className="InvoicePreviewer__header">
                <ButtonType1 parentMethod={onClose}>Cerrar</ButtonType1>
            </div>

            <div className="InvoicePreviewer__iframe-container">
                <iframe
                    src={pdfUrl || 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'}
                    className="InvoicePreviewer__iframe"
                    title="PDF Preview"
                />
            </div>
        </section>
    );
};
