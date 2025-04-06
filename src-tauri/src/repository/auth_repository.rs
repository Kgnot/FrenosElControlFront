use crate::err::http_error::ApiError;
use crate::api::api_client::ApiClient;
use crate::model::auth::{LoginRequest, LoginResponse};


pub struct AuthRepository<'a> {
    client: &'a ApiClient,
}


impl<'a> AuthRepository<'a>{

    pub fn new(client: &'a ApiClient) -> Self {
        AuthRepository { client }
    }

    pub async fn login(&self, req: &LoginRequest) -> Result<LoginResponse, ApiError> {
        self.client.post("/auth/login", req).await
    }

    pub async fn refresh(&self, token: &str) -> Result<LoginResponse, ApiError> {
        #[derive(serde::Serialize)]
        struct RefreshRequest<'a> {
            token: &'a str,
        }

        let req = RefreshRequest { token };
        self.client.post("/auth/refresh", &req).await
    }
}

