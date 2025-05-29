import {useFormContext} from 'react-hook-form';
import './InvoiceForm.css'
import {InvoiceFormValues} from "../../../../form/InvoiceForm.ts";
import {InputCustomerForm} from "./InputForm/InputCustomerForm.tsx";
import {Invoice} from "../../../../entity/Invoice.ts";

// este también puede recibir formularios
interface InvoiceFormProps {
    invoice?: Invoice
    className: string
}


export const InvoiceForm = (
    {
        className,
        invoice
    }: InvoiceFormProps) => {
    // Elimina el useForm aquí porque el form se manejará desde CreateInvoice
    const {control, formState} = useFormContext<InvoiceFormValues>();



    return (
        <section className={`customerForm ${className}`}>
            <h4> Información del cliente </h4>
            <form className={"form_customerForm"}>
                <div className={"form_div"}>
                    <InputCustomerForm
                        name={"name"}
                        control={control}
                        label="Nombre del cliente"
                        error={formState.errors.name}
                        placeHolder={"Nombre del cliente"}
                        value={invoice?.customer?.name}
                    />
                    <InputCustomerForm
                        name={"identify"}
                        control={control}
                        label="Cédula"
                        error={formState.errors.identify}
                        placeHolder={"Número de cédula"}
                        value={invoice?.customer?.identify}
                    />
                </div>
                <InputCustomerForm
                    name={"address"}
                    control={control}
                    label="Dirección"
                    error={formState.errors.address}
                    placeHolder={"Dirección del cliente"}
                    value={invoice?.customer?.address}
                />
                <div className={"form_div"}>
                    <InputCustomerForm
                        name={"vehicle"}

                        control={control}
                        label="Tipo Vehículo"
                        error={formState.errors.vehicle}
                        placeHolder={"Tipo de vehículo del cliente"}
                        value={invoice?.vehicle?.description}
                    />
                    <InputCustomerForm
                        name={"plate"}
                        control={control}
                        label="Placa"
                        error={formState.errors.plate}
                        placeHolder={"Placa del vehículo"}
                        value={invoice?.vehicle?.plate}

                    />
                </div>
                <InputCustomerForm
                    name={"phone"}
                    control={control}
                    label="Teléfono"
                    error={formState.errors.phone}
                    placeHolder={"Teléfono del cliente"}
                    value={invoice?.customer?.phone}
                    type="tel"
                />
            </form>
        </section>
    )
}


