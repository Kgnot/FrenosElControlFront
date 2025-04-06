mod model;
mod repository;
mod api;
mod err;
mod service;
mod commands;

use tauri::Builder;
use commands::auth_commands::{login, refresh}; // tus funciones expuestas


fn main() {
    Builder::default()
        .invoke_handler(tauri::generate_handler![
            login,
            refresh,

        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri app");
}