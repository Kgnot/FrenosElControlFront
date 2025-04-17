use crate::err::http_error::ApiError;
use crate::api::api_client::ApiClient;
use crate::api::api_response::ApiResponse;
use crate::model::auth::{LoginRequest, LoginResponse};
use crate::model::refreshRequest::RefreshRequest;

pub struct AuthRepository {
        client: ApiClient,
    }


    impl AuthRepository{

        pub fn new(client:ApiClient) -> Self {
            AuthRepository { client }
        }

        pub async fn login(&self, req: &LoginRequest) -> Result<LoginResponse, ApiError> {
            let wrapped : ApiResponse<LoginResponse> = self.client.post("auth/login", req).await?;
            Ok(wrapped.content)
        }

    pub async fn refresh(&self, refresh_token:RefreshRequest) -> Result<ApiResponse<LoginResponse>, ApiError> {
        self.client.post("auth/refresh", &refresh_token).await
    }
}

