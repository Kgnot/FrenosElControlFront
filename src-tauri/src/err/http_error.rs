use thiserror::Error;

#[derive(Error, Debug)]
pub enum ApiError {
    #[error("HTTP error: {0}")]
    Http(#[from] reqwest::Error),

    #[error("Unexpected response format")]
    DeserializeError,

    #[error("Other: {0}")]
    Other(String),
}