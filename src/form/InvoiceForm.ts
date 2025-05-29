import {z} from "zod"

// Este es el apartado del Form principal para ingresar una factura
export const schema = z.object({
    name: z.string().nonempty(),
    identify: z.string(),
    address: z.string(),
    vehicle: z.string(),
    plate: z.string(),
    phone: z.string(),
})

export type InvoiceFormValues = z.infer<typeof schema>

