import {Customer} from "../entity";
import {ApiPageableResponse, ApiResponse} from "../entity/wrapper/wrappers.ts";
import {getToken} from "./getToken.ts";
import {safeInvoke} from "./safeInvoke.ts";
// GET /customer (paginado)
export async function customerAPI(): Promise<Customer[]> {
    // const token:string = getToken();
    const page = 0;
    const size = 100;
    console.log("customerAPI");
    const response = await safeInvoke<ApiPageableResponse<Customer[]>>("get_all_customer", {
        // token,
        page,
        size,
    });
    return response.content;
}

// GET /customer/{name}
export async function fetchCustomerByNameAPI(name: string): Promise<Customer> {
    console.log("fetchCustomerByNameAPI");
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Customer>>("get_customer_by_name", { name, token });
    return response.content;
}

// GET /customer/letter/{letter}
export async function fetchCustomerByLetterNameAPI(letter: string): Promise<Customer[]> {
    console.log("fetchCustomerByLetterNameAPI");
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Customer[]>>("get_customer_by_letter_name", { letter, token });
    return response.content;
}

// GET /customer/contain/{name}
export async function fetchCustomerByContainingNameAPI(name: string): Promise<Customer[]> {
    console.log("fetchCustomerByContainingNameAPI");
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Customer[]>>("get_customer_by_containing_name", { name, token });
    return response.content;
}

// POST /customer
export async function createCustomerAPI(customer: Customer): Promise<Customer> {
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Customer>>("create_customer", { customer, token });
    return response.content;
}

// PUT /customer
export async function updateCustomerAPI(customer: Customer): Promise<Customer> {
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Customer>>("update_customer", { customer, token });
    return response.content;
}