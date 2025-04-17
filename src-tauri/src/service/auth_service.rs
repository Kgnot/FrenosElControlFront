use crate::api::api_response::ApiResponse;
use crate::err::http_error::ApiError;
use crate::model::auth::{LoginRequest, LoginResponse};
use crate::model::refreshRequest::RefreshRequest;
use crate::repository::auth_repository::AuthRepository;

pub struct AuthService {
    repository: AuthRepository,
}

impl AuthService {
    pub fn new(repository: AuthRepository) -> Self {
        AuthService { repository }
    }

    pub async fn login(&self, username: &str, password: &str) -> Result<LoginResponse, ApiError> {
        let req = LoginRequest {
            name: username.to_string(),
            password: password.to_string(),
        };
        self.repository.login(&req).await
    }

    pub async fn refresh(&self, token: String) -> Result<ApiResponse<LoginResponse>, ApiError> {
        let req = RefreshRequest {
            refreshToken: token
        };
        println!("refresh token: {}", req.refreshToken);
        self.repository.refresh(req).await
    }
}