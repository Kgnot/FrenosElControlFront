
import { Control, Controller, FieldError } from "react-hook-form";
import { InvoiceFormValues } from "../../../../../form/InvoiceForm.ts";
import './InputCustomerForm.css';

interface InputCustomerFormProps {
    name: keyof InvoiceFormValues;
    control: Control<InvoiceFormValues>;
    label: string;
    type?: string;
    error?: FieldError;
    placeholder?: string;
    defaultValue?: string;
}

export const InputCustomerForm = ({
                                      name,
                                      control,
                                      label,
                                      type = "text",
                                      error,
                                      placeholder,
                                      defaultValue
                                  }: InputCustomerFormProps) => {
    return (
        <div className="input-group">
            <label htmlFor={name} className="input-label">
                {label}
                <span className="required">*</span>
            </label>

            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        id={name}
                        placeholder={placeholder}
                        className={`input-field ${error ? 'input-error' : ''}`}
                    />
                )}
            />

            {error && (
                <span className="error-message">
                    {error.message}
                </span>
            )}
        </div>
    );
};