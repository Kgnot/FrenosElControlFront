use crate::api::api_client::ApiClient;
use crate::commands::base_url::BASE_URL;
use crate::model::auth::{LoginRequest, LoginResponse};
use crate::repository::auth_repository::AuthRepository;

#[tauri::command]
pub async fn login(username: String, password: String) -> Result<LoginResponse, String> {
    let client = ApiClient::new(BASE_URL);
    let repo = AuthRepository::new(&client);

    let req = LoginRequest { name: username, password };

    repo.login(&req)
        .await
        .map_err(|e| format!("Login failed: {:?}", e))
}

#[tauri::command]
pub async fn refresh(refresh_token: &str) -> Result<LoginResponse, String> {
    let client = ApiClient::new(BASE_URL);
    let repo = AuthRepository::new(&client);

    repo.refresh(&refresh_token)
        .await
        .map_err(|e| format!("Refresh failed: {:?}", e))
}