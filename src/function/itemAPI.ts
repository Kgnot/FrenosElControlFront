import {Product} from "../entity";
import {ApiPageableResponse, ApiResponse} from "../entity/wrapper/wrappers.ts";
import {getToken} from "./getToken.ts";
import {safeInvoke} from "./safeInvoke.ts";

export async function itemAPI(): Promise<Product[]> {
    // const token = getToken();
    const page = 0;
    const size = 100;
    console.log("ItemAPi")
    const response = await safeInvoke<ApiPageableResponse<Product[]>>("get_all_items", {
        // token,
        page,
        size,
    });
    console.log(response);
    return response.content;
}

// GET /item/type/{type}
export async function fetchItemsByTypeAPI(type: string): Promise<Product[]> {
    console.log("fetchItemsByTypeAPI")
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product[]>>("get_items_by_type", { type, token });
    return response.content;
}

// GET /item/description/{description}
export async function fetchItemByDescriptionAPI(description: string): Promise<Product> {
    console.log("fetchItemByDescriptionAPI")
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product>>("get_items_by_description", { description, token });
    return response.content;
}

// GET /item/description/letter/{letter}
export async function fetchItemsByLetterAPI(letter: string): Promise<Product[]> {
    console.log("fetchItemsByLetterAPI")
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product[]>>("get_items_by_letter", { letter, token });
    return response.content;
}

// GET /item/description/contain/{word}
export async function fetchItemsByWordAPI(word: string): Promise<Product[]> {
    console.log("fetchItemsByWordAPI")
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product[]>>("get_items_by_word", { word, token });
    return response.content;
}

// POST /item
export async function createItemAPI(item: Product): Promise<Product> {
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product>>("create_item", { item, token });
    return response.content;
}

// PUT /item
export async function updateItemAPI(item: Product): Promise<Product> {
    const token = getToken();
    const response = await safeInvoke<ApiResponse<Product>>("update_item", { item, token });
    return response.content;
}
