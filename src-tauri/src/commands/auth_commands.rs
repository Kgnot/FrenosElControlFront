use crate::api::api_client::ApiClient;
use crate::model::auth::{LoginRequest, LoginResponse};
use crate::repository::auth_repository::AuthRepository;

#[tauri::command]
pub async fn login(username: String, password: String) -> Result<LoginResponse, String> {
    let client = ApiClient::new("http://localhost:8080");
    let repo = AuthRepository::new(&client);

    let req = LoginRequest { username, password };

    repo.login(&req)
        .await
        .map_err(|e| format!("Login failed: {:?}", e))
}

#[tauri::command]
pub async fn refresh(token: String) -> Result<LoginResponse, String> {
    let client = ApiClient::with_token("http://localhost:8080", &token);
    let repo = AuthRepository::new(&client);

    repo.refresh(&token)
        .await
        .map_err(|e| format!("Refresh failed: {:?}", e))
}