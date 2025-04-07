mod model;
mod repository;
mod api;
mod err;
mod service;
mod commands;

use tauri::Builder;

use commands::{
    auth_commands::*,
    item_commands::*,
    customer_commands::*,
    vehicle_commands::*
};

fn main() {

    Builder::default()
        .invoke_handler(tauri::generate_handler![
            login,
            refresh,
            // items section
            get_all_items,
            get_items_by_type,
            get_items_by_description,
            get_items_by_letter,
            get_items_by_word,
            create_item,
            update_item,
            // customer section
            get_all_customer,
            get_customer_by_name,
            get_customer_by_letter_name,
            get_customer_by_containing_name,
            create_customer,
            update_customer,
            //vehicle section
            get_all_vehicles,
            get_vehicle_by_id,
            get_vehicles_by_customer_id,
            create_vehicle,
            delete_vehicle,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri app");
}