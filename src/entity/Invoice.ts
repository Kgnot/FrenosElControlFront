import {Vehicle} from "./Vehicle.ts";
import {PaymentType} from "./PaymentType.ts";
import {Customer} from "./Customer.ts";
import {InvoiceItems} from "./InvoiceItems.ts";

export interface Invoice {
    id:number
    dateOrdered:Date,
    total:number,
    vehicle:Vehicle,
    paymentType:PaymentType
    customer:Customer
    status:string
    invoiceItems:InvoiceItems[]
}
