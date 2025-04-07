use crate::err::http_error::ApiError;
use crate::api::api_client::ApiClient;
use crate::api::api_response::ApiResponse;
use crate::model::auth::{LoginRequest, LoginResponse};


pub struct AuthRepository<'a> {
        client: &'a ApiClient,
    }


    impl<'a> AuthRepository<'a>{

        pub fn new(client: &'a ApiClient) -> Self {
            AuthRepository { client }
        }

        pub async fn login(&self, req: &LoginRequest) -> Result<LoginResponse, ApiError> {
            let wrapped : ApiResponse<LoginResponse> = self.client.post("auth/login", req).await?;
            Ok(wrapped.content)
        }

    pub async fn refresh(&self, refresh_token: &str) -> Result<LoginResponse, ApiError> {
        #[derive(serde::Serialize)]
        struct RefreshRequest<'a> {
            ref_token: &'a str,
        }

        let req = RefreshRequest { ref_token: refresh_token };
        self.client.post("/auth/refresh", &req).await
    }
}

