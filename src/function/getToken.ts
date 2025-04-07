import {LoginResponse} from "../entity";

export function getToken(): string {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
        throw new Error("No se encontró el token JWT");
    }
    return jwt;
}

import {invoke} from "@tauri-apps/api/core";

export async function tryRefreshToken(): Promise<boolean> {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return false;

    try {
        const response = await invoke<LoginResponse>("refresh", {
            refreshToken,
        });
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
        console.log("Token refrescado correctamente");
        return true;
    } catch (e) {
        console.error("Error refrescando el token:", e);
        return false;
    }
}
