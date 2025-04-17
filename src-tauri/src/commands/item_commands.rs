use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::commands::base_url::BASE_URL;
use crate::model::item::Item;
use crate::repository::item_repository::ItemRepository;

#[tauri::command]
pub async fn get_all_items(page: u32, size: u32, token: String) -> Result<ApiPageableResponse<Vec<Item>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.get_all_items(page, size)
        .await
        .map_err(|e| format!("Failed to fetch items: {}", e))
}

#[tauri::command]
pub async fn get_items_by_type(item_type: String, token: String) -> Result<ApiResponse<Vec<Item>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.get_by_type(&item_type).await.map_err(|e| format!("Failed to fetch items by type: {}", e))
}

#[tauri::command]
pub async fn get_items_by_description(description: String, token: String) -> Result<ApiResponse<Vec<Item>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.get_by_description(&description).await.map_err(|e| format!("Failed to fetch items by description: {}", e))
}

#[tauri::command]
pub async fn get_items_by_letter(letter: String, token: String) -> Result<ApiResponse<Vec<Item>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.get_by_letter(&letter).await.map_err(|e| format!("Failed to fetch items by letter: {}", e))
}

#[tauri::command]
pub async fn get_items_by_word(word: String, token: String) -> Result<ApiResponse<Vec<Item>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.get_by_word_contained(&word).await.map_err(|e| format!("Failed to fetch items by word: {}", e))
}

#[tauri::command]
pub async fn create_item(item: Item, token: String) -> Result<ApiResponse<Item>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.create_item(&item).await.map_err(|e| format!("Failed to create item: {}", e))
}

#[tauri::command]
pub async fn update_item(item: Item, token: String) -> Result<ApiResponse<Item>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repo = ItemRepository::new(client);

    repo.update_item(&item).await.map_err(|e| format!("Failed to update item: {}", e))
}