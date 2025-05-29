import { Control, Controller, FieldError } from "react-hook-form";
import './InputCustomerForm.css';
import {CustomerFormData} from "../../../../../form/CustomerForm.ts";

interface Props {
    name: keyof CustomerFormData;
    control: Control<CustomerFormData>;
    label: string;
    type?: string;
    error?: FieldError;
    placeHolder?: string;
}

export const InputCustomerForm = ({ name, control, label, type = "text", error, placeHolder }: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        id={name}
                        placeholder={placeHolder}
                        className={`form-control ${error ? "error" : ""}`}
                    />
                )}
            />
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
};
