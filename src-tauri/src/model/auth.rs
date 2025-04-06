use serde::{Serialize, Deserialize};
#[derive(Serialize)]
pub struct LoginRequest{
    pub username: String,
    pub password: String,
}

#[derive(Deserialize)]
pub struct LoginResponse{
    pub token: String,
    pub refreshToken: String,
}

