import {Item} from "./Item.ts";

type invoiceId = number
type invoiceItemId = number // quiza haga un cambio aqui a productId
type InvoiceItemsId = [invoiceId,invoiceItemId]


export interface InvoiceItems {
    id:InvoiceItemsId,
    price:number,
    quantity:number,
    item:Item
    unitValue:number,
    total:number,
}