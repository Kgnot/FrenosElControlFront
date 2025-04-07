use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::commands::base_url::BASE_URL;
use crate::err::http_error::ApiError;
use crate::model::vehicle::{Vehicle, VehicleRequest};
use crate::repository::vehicle_repository::VehicleRepository;

#[tauri::command]
pub async fn get_all_vehicles(token: String, page: u32, size: u32) -> Result<ApiPageableResponse<Vec<Vehicle>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = VehicleRepository::new(client);
    repo.get_all_vehicles(page, size).await.map_err(|e| format!("Failed to fetch items: {}", e))
}

#[tauri::command]
pub async fn get_vehicle_by_id(token: String, id: u32) -> Result<ApiResponse<Vehicle>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = VehicleRepository::new(client);
    repo.get_vehicle_by_id(id).await.map_err(|e| format!("Failed to fetch items: {}", e))
}

#[tauri::command]
pub async fn get_vehicles_by_customer_id(token: String, customer_id: u32) -> Result<ApiResponse<Vec<Vehicle>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = VehicleRepository::new(client);
    repo.get_vehicles_by_customer_id(customer_id).await.map_err(|e| format!("Failed to fetch items: {}", e))
}

#[tauri::command]
pub async fn create_vehicle(token: String, vehicle: VehicleRequest) -> Result<ApiResponse<Vehicle>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = VehicleRepository::new(client);
    repo.create_vehicle(&vehicle).await.map_err(|e| format!("Failed to fetch items: {}", e))
}

#[tauri::command]
pub async fn delete_vehicle(token: String, id: u32) -> Result<(), String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = VehicleRepository::new(client);
    repo.delete_vehicle(id).await.map_err(|e| format!("Failed to fetch items: {}", e))
}