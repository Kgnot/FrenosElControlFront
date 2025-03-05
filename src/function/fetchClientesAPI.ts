import {Customer} from "../entity";
import {invoke} from "@tauri-apps/api/core";

export async function fetchClientesAPI(): Promise<Customer[]> {
    if (import.meta.env.MODE === "development") {
        // Dev: llama a tu backend normal
        const response = await fetch("http://localhost:8080/customer/");
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

export async function fetchClientesByNameAPI(name: string): Promise<Customer> {
    if (import.meta.env.MODE === "development") {
        // Modo desarrollo: Llama al backend directamente
        const response = await fetch(`http://localhost:8080/customer/${name}`);
        if (!response.ok) {
            throw new Error(`Error al obtener clientes por nombre: ${name}`);
        }
        return await response.json();
    } else {
        const response = await invoke<string>("obtener_clientes_por_nombre", { name });
        return JSON.parse(response);
    }
}