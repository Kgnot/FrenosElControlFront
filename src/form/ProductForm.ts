// src/form/ProductForm.ts
import {z} from 'zod';

// Schema de validación para el producto
export const productSchema = z.object({
    productCode: z
        .string()
        .min(0)
        .trim(),

    productDescription: z
        .string()
        .min(1, 'La descripción del producto es requerida')
        .trim(),

    quantity: z
        .number()
        .min(1, 'La cantidad debe ser mayor a 0')
        .int('La cantidad debe ser un número entero'),

    unitValue: z
        .number()
        .min(0.01, 'El valor unitario debe ser mayor a 0')
});

// Tipo inferido del schema
export type ProductFormValues = z.infer<typeof productSchema>;

export interface ProductInsert extends ProductFormValues {
    id: number;
    total: number;
}

// Datos mock para testing
export const mockProductData: ProductInsert[] = [
    {
        id: 1,
        productCode: 'PROD001',
        productDescription: 'Descripción del producto 1',
        quantity: 10,
        unitValue: 15000,
        total: 150000
    },
    {
        id: 2,
        productCode: 'PROD002',
        productDescription: 'Descripción del producto 2',
        quantity: 1,
        unitValue: 15000,
        total: 15000
    },
    {
        id: 3,
        productCode: 'PROD003',
        productDescription: 'Descripción del producto 3',
        quantity: 1,
        unitValue: 35000,
        total: 35000
    }
];

// Valores por defecto para el formulario
export const defaultProductValues: ProductFormValues = {
    productCode: '',
    productDescription: '',
    quantity: 1,
    unitValue: 0
};