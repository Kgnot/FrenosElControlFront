import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Customer } from "../../../../entity";
import {customerForm, CustomerFormData, defaultCustomerFormData} from "../../../../form/CustomerForm.ts";
import {InputCustomerForm} from "./InputForm/InputCustomerForm.tsx";
import './CustomerForm.css';

interface CustomerFormProps {
    mode: 'add' | 'edit';
    customer: Customer | null;
    onSave: (customer: Customer) => void;
    onCancel: () => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({ mode, customer, onSave, onCancel }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<CustomerFormData>({
        resolver: zodResolver(customerForm),
        defaultValues: defaultCustomerFormData
    });

    useEffect(() => {
        if (customer) {
            reset({
                name: customer.name,
                identify: customer.identify,
                address: customer.address,
                phone: customer.phone
            });
        }
    }, [customer, reset]);

    const onSubmit = (data: CustomerFormData) => {
        const completeCustomer: Customer = {
            customerId: customer?.customerId ?? -1,
            ...data
        };
        onSave(completeCustomer);
    };

    return (
        <form className="customer-form-modal" onSubmit={handleSubmit(onSubmit)}>
            <h2>{mode === 'add' ? 'Añadir Cliente' : 'Editar Cliente'}</h2>

            <InputCustomerForm
                name="name"
                label="Nombre"
                control={control}
                placeHolder="Nombre del cliente"
                error={errors.name}
            />

            <InputCustomerForm
                name="identify"
                label="Cédula"
                control={control}
                placeHolder="Número de cédula"
                error={errors.identify}
            />

            <InputCustomerForm
                name="address"
                label="Dirección"
                control={control}
                placeHolder="Dirección del cliente"
                error={errors.address}
            />

            <InputCustomerForm
                name="phone"
                label="Teléfono"
                control={control}
                placeHolder="Teléfono de contacto"
                error={errors.phone}
                type="tel"
            />

            <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-save">{mode === 'add' ? 'Añadir' : 'Guardar'}</button>
            </div>
        </form>
    );
};
