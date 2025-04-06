import {Product} from "../entity";
import {invoke} from "@tauri-apps/api/core";
import {ApiPageableResponse, ApiResponse} from "../entity/wrapper/wrappers.ts";

function getToken(): string {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
        throw new Error("No se encontró el token JWT");
    }
    return jwt;
}

export async function itemAPI(): Promise<Product[]> {
    const token = getToken();
    const page = 0;
    const size = 100;
    console.log("ItemAPi")
    const response = await invoke<ApiPageableResponse<Product[]>>("get_all_items", {
        token,
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
    const response = await invoke<string>("get_items_by_type", { type, token });
    const data = await JSON.parse(response);
    return data;
}

// GET /item/description/{description}
export async function fetchItemByDescriptionAPI(description: string): Promise<Product> {
    console.log("fetchItemByDescriptionAPI")
    const token = getToken();
    const response = await invoke<string>("get_items_by_description", { description, token });
    const data = await JSON.parse(response);
    return data;
}

// GET /item/description/letter/{letter}
export async function fetchItemsByLetterAPI(letter: string): Promise<Product[]> {
    console.log("fetchItemsByLetterAPI")
    const token = getToken();
    const response = await invoke<ApiResponse<Product[]>>("get_items_by_letter", { letter, token });
    console.log(response);
    return response.content;
}

// GET /item/description/contain/{word}
export async function fetchItemsByWordAPI(word: string): Promise<Product[]> {
    console.log("fetchItemsByWordAPI")
    const token = getToken();
    const response = await invoke<string>("get_items_by_word", { word, token });
    console.log(response);
    const data = await JSON.parse(response);
    return data;
}

// POST /item
export async function createItemAPI(item: Product): Promise<Product> {
    const token = getToken();
    const response = await invoke<string>("create_item", { item, token });
    const data = await JSON.parse(response);
    return data;
}

// PUT /item
export async function updateItemAPI(item: Product): Promise<Product> {
    const token = getToken();
    const response = await invoke<string>("update_item", { item, token });
    const data = await JSON.parse(response);
    return data;
}
