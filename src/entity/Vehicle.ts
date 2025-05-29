import {Customer} from "./Customer.ts";

export interface Vehicle {
    customer:Customer,
    plate:string,
    description:string
}