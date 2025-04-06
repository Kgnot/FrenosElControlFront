mod model;
mod repository;
mod api;
mod err;
mod service;
mod commands;

use tauri::Builder;
use commands::auth_commands::{login, refresh}; // tus funciones expuestas
use commands::item_commands::{
    get_all_items,
    get_items_by_type,
    get_items_by_description,
    get_items_by_letter,
    get_items_by_word,
    create_item,
    update_item,
};


fn main() {

    Builder::default()
        .invoke_handler(tauri::generate_handler![
            login,
            refresh,
            get_all_items,
            get_items_by_type,
            get_items_by_description,
            get_items_by_letter,
            get_items_by_word,
            create_item,
            update_item,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri app");
}