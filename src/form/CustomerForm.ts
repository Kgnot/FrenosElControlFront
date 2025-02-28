import {z} from "zod"

export const schema = z.object({
    name: z.string().nonempty(),
    identify: z.string(),
    address: z.string(),
    vehicle: z.string(),
    plate: z.string(),
    phone: z.string(),
})

export type CustomerFormValues = z.infer<typeof schema>

