import {useFormContext} from 'react-hook-form';
import './CustomerForm.css'
import {CustomerFormValues} from "../../../../form/CustomerForm.ts";
import {InputCustomerForm} from "./InputForm/InputCustomerForm.tsx";

export const CustomerForm = ({className}: { className: string }) => {
    // Elimina el useForm aquí porque el form se manejará desde CreateInvoice
    const { control, formState } = useFormContext<CustomerFormValues>();

    return (
        <section className={`customerForm ${className}`}>
            <h2> Información del cliente </h2>
            <form className={"form_customerForm"}>
                <div className={"form_div"}>
                    <InputCustomerForm
                        name={"name"}
                        control={control}
                        label="Nombre del cliente"
                        error={formState.errors.name}
                        placeHolder={"Nombre del cliente"}
                    />
                    <InputCustomerForm
                        name={"identify"}
                        control={control}
                        label="Cédula"
                        error={formState.errors.identify}
                        placeHolder={"Número de cédula"}
                    />
                </div>
                <InputCustomerForm
                    name={"address"}
                    control={control}
                    label="Dirección"
                    error={formState.errors.address}
                    placeHolder={"Dirección del cliente"}
                />
                <div className={"form_div"}>
                    <InputCustomerForm
                        name={"vehicle"}
                        control={control}
                        label="Tipo Vehículo"
                        error={formState.errors.vehicle}
                        placeHolder={"Tipo de vehículo del cliente"}
                    />
                    <InputCustomerForm
                        name={"plate"}
                        control={control}
                        label="Placa"
                        error={formState.errors.plate}
                        placeHolder={"Placa del vehículo"}
                    />
                </div>
                <InputCustomerForm
                    name={"phone"}
                    control={control}
                    label="Teléfono"
                    error={formState.errors.phone}
                    placeHolder={"Teléfono del cliente"}
                />
            </form>
        </section>
    )
}


