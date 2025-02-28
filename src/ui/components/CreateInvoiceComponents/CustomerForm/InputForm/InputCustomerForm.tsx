import {Control, Controller, FieldError} from "react-hook-form";
import {CustomerFormValues} from "../../../../../form/CustomerForm.ts";
import './InputCustomerForm.css'

interface Props {
    name: keyof CustomerFormValues
    control: Control<CustomerFormValues>
    label: string
    type?: string
    error?: FieldError
    placeHolder?: string
}

export const InputCustomerForm = ({name, control, label, type, error,placeHolder}: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {/*Controller*/}
            <Controller
                name={name}
                control={control}
                render={({field}) =>
                    <input {...field} type={type} className={`form-control ${error ? "is-invalid" : ""}`} id={name} placeholder={placeHolder}/>
                }
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}