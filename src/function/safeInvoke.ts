import {invoke} from "@tauri-apps/api/core";
import {getToken, tryRefreshToken} from "./getToken.ts";

export async function safeInvoke<T>(command: string, args?: Record<string, unknown>): Promise<T> {
    const initialArgs = {
        ...(args || {}),
        token: getToken(),// desde aquí pasamos el token
    };
    try {
        return await invoke<T>(command, initialArgs);
    } catch
        (error) {
        const message = typeof error === "string"
            ? error
            : error instanceof Error
                ? error.message
                : JSON.stringify(error);

        if (message.includes("401") ||
            message.includes("403") ||
            message.includes("Not Found")) {
            const refreshed = await tryRefreshToken();
            if (refreshed) {
                const newArgs = {
                    ...(args || {}),
                    token: getToken(),
                };
                return await invoke<T>(command, newArgs);
            }
        }
        throw error;
    }
}