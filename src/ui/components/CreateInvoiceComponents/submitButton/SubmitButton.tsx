import {useFormContext} from "react-hook-form";
import {CustomerFormValues} from "../../../../form/CustomerForm.ts";
import './SubmitButton.css'

export const SubmitButton = () => {
    const {handleSubmit} = useFormContext<CustomerFormValues>();

    const onSubmit = (data: CustomerFormValues) => {
        console.log(data);
    };

    return (
        <button type="button" onClick={handleSubmit(onSubmit)}>
            Generar
        </button>
    );
}