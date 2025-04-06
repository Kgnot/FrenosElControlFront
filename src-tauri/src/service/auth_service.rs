use crate::err::http_error::ApiError;
use crate::model::auth::{LoginRequest, LoginResponse};
use crate::repository::auth_repository::AuthRepository;

pub struct AuthService<'a> {
    repository: AuthRepository<'a>,
}

impl<'a> AuthService<'a> {
    pub fn new(repository: AuthRepository<'a>) -> Self {
        AuthService { repository }
    }

    pub async fn login(&self, username: &str, password: &str) -> Result<LoginResponse, ApiError> {
        let req = LoginRequest {
            name: username.to_string(),
            password: password.to_string(),
        };
        self.repository.login(&req).await
    }

    pub async fn refresh(&self, token: &str) -> Result<LoginResponse, ApiError> {
        self.repository.refresh(token).await
    }
}