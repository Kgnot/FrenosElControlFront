use serde::{Serialize, Deserialize};
#[derive(Debug, Serialize, Deserialize)]
pub struct LoginRequest{
    pub name: String,
    pub password: String,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct LoginResponse{
    pub token: String,
    pub refreshToken: String,
}

