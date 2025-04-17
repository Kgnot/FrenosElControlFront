import {LoginResponse} from "../entity";

export function getToken(): string {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
        throw new Error("No se encontró el token JWT");
    }
    return jwt;
}

import {invoke} from "@tauri-apps/api/core";
import {ApiResponse} from "../entity/wrapper/wrappers.ts";

export async function tryRefreshToken(): Promise<boolean> {
    const refreshToken:string | null = localStorage.getItem("refreshToken");
    console.log("refreshToken", refreshToken);
    if (!refreshToken) return false;

    try {
        const response = await invoke<ApiResponse<LoginResponse>>("refresh", {
            refreshToken,
        });
        const data = response.content;
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        console.log("Token refrescado correctamente");
        return true;
    } catch (e) {
        console.error("Error refrescando el token:", e);
        return false;
    }
}
