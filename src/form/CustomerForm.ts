import { z } from 'zod';

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
        .min(1, 'La cédula es requerida')
        .regex(/^\d{6,12}$/, 'La cédula debe tener entre 6 y 12 dígitos')
        .transform(str => str.trim()),

    address: z
        .string()
        .min(1, 'La dirección es requerida')
        .min(10, 'La dirección debe tener al menos 10 caracteres')
        .max(255, 'La dirección no puede exceder 255 caracteres')
        .transform(str => str.trim()),

    phone: z
        .string()
        .min(1, 'El teléfono es requerido')
        .regex(/^\d{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos')
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
