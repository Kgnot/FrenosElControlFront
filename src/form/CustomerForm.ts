import {z} from 'zod';

// Esquema para validar datos del cliente
export const customerForm = z.object({
    name: z
        .string()
        .min(1, 'El nombre es requerido')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre no puede exceder 100 caracteres')
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras y espacios')
        .transform(str => str.trim()),

    identify: z
        .string()
        .min(0)
        .transform(str => str.trim()),

    address: z
        .string()
        .max(255, 'La dirección no puede exceder 255 caracteres')
        .transform(str => str.trim()),

    phone: z
        .string()
        .transform(str => str.trim())
});

// Tipos TypeScript derivados de los esquemas
export type CustomerFormData = z.infer<typeof customerForm>;

export const defaultCustomerFormData: CustomerFormData = {
    name: '',
    identify: '',
    address: '',
    phone: ''
};
