import {Product} from "../entity";
import {invoke} from "@tauri-apps/api/core";

export async function productAPI(): Promise<Product[]> {
    if (import.meta.env.MODE === "development") {
        // Dev: llama a tu backend normal
        const response = await fetch("http://localhost:8080/product/");
        if (!response.ok) {
            throw new Error("Error al obtener clientes desde el backend");
        }
        return await response.json();
    } else {
        // Prod: llama a Rust vía Tauri
        const response = await invoke<string>("obtener_clientes");
        return JSON.parse(response);
    }
}

export async function fetchProductByNameAPI(description: string): Promise<Product> {
    if (import.meta.env.MODE === "development") {
        // Modo desarrollo: Llama al backend directamente
        const response = await fetch(`http://localhost:8080/product/description/${description}`);
        if (!response.ok) {
            throw new Error(`Error al obtener clientes por nombre: ${description}`);
        }
        return await response.json();
    } else {
        const response = await invoke<string>("obtener_productos_por_descripcion", { description });
        return JSON.parse(response);
    }
}

export async function  fetchProductsByDescLetterAPI(letter:string): Promise<Product[]>{
    if (import.meta.env.MODE === "development") {
        // Modo desarrollo: Llama al backend directamente
        const response = await fetch(`http://localhost:8080/product/description/letter/${letter}`);
        if (!response.ok) {
            throw new Error(`Error al obtener clientes por nombre: ${letter}`);
        }
        return await response.json();
    } else {
        const response = await invoke<string>("obtener_productos_por_letra_desc", { letter });
        return JSON.parse(response);
    }
}
