use crate::api::api_client::ApiClient;
use crate::repository::auth_repository::AuthRepository;
use crate::service::auth_service::AuthService;

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
            // aquí irán más comandos si quieres: get_customers, post_invoice, etc.
        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri app");
}