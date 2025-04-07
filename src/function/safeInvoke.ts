import {invoke} from "@tauri-apps/api/core";
import {getToken, tryRefreshToken} from "./getToken.ts";

export async function safeInvoke<T>(command: string, args?: Record<string, unknown>): Promise<T> {
    try {
        return await invoke<T>(command, args);
    } catch
        (error) {
        const message = typeof error === "string"
            ? error
            : error instanceof Error
                ? error.message
                : JSON.stringify(error);
        console.log("SafeInvoke error:", message);
        if (message.includes("401")) {
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