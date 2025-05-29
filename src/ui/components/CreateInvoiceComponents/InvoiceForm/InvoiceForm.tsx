import { useFormContext } from 'react-hook-form';
import './InvoiceForm.css';
import { InvoiceFormValues } from "../../../../form/InvoiceForm.ts";
import { InputCustomerForm } from "./InputForm/InputCustomerForm.tsx";
import { Invoice } from "../../../../entity/Invoice.ts";

interface InvoiceFormProps {
    invoice?: Invoice;
    className?: string;
}

export const InvoiceForm = ({ className = "", invoice }: InvoiceFormProps) => {
    const { control, formState } = useFormContext<InvoiceFormValues>();

    return (
        <section className={`invoice-form ${className}`}>
            <div className="invoice-form-header">
                <h3>Información del Cliente</h3>
            </div>

            <form className="customer-form">
                {/* Datos personales */}
                <div className="form-section">
                    <div className="form-row">
                        <InputCustomerForm
                            name="name"
                            control={control}
                            label="Nombre del cliente"
                            error={formState.errors.name}
                            placeholder="Nombre del cliente"
                            defaultValue={invoice?.customer?.name}
                        />
                        <InputCustomerForm
                            name="identify"
                            control={control}
                            label="Cédula"
                            error={formState.errors.identify}
                            placeholder="Número de cédula"
                            defaultValue={invoice?.customer?.identify}
                        />
                    </div>

                    <InputCustomerForm
                        name="address"
                        control={control}
                        label="Dirección"
                        error={formState.errors.address}
                        placeholder="Dirección del cliente"
                        defaultValue={invoice?.customer?.address}
                    />

                    <InputCustomerForm
                        name="phone"
                        control={control}
                        label="Teléfono"
                        error={formState.errors.phone}
                        placeholder="Teléfono del cliente"
                        type="tel"
                        defaultValue={invoice?.customer?.phone}
                    />
                </div>

                {/* Datos del vehículo */}
                <div className="form-section">
                    <h4 className="section-title">Datos del Vehículo</h4>
                    <div className="form-row">
                        <InputCustomerForm
                            name="vehicle"
                            control={control}
                            label="Tipo Vehículo"
                            error={formState.errors.vehicle}
                            placeholder="Tipo de vehículo del cliente"
                            defaultValue={invoice?.vehicle?.description}
                        />
                        <InputCustomerForm
                            name="plate"
                            control={control}
                            label="Placa"
                            error={formState.errors.plate}
                            placeholder="Placa del vehículo"
                            defaultValue={invoice?.vehicle?.plate}
                        />
                    </div>
                </div>
            </form>
        </section>
    );
};