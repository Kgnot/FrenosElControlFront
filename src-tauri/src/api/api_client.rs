use reqwest::Client;
use serde::{Deserialize, Serialize};
use crate::err::http_error::ApiError;

#[derive(Clone)]
pub struct ApiClient{
    base_url:String,
    client: Client,
}

impl ApiClient{
    pub fn new(base_url: &str) -> Self {
        let client = Client::new();
        ApiClient {
            base_url: base_url.to_string(),
            client,
        }
    }

    pub fn with_token(base_url: &str, token: &str) -> Self {
        let client = Client::builder()
            .default_headers({
                let mut headers = reqwest::header::HeaderMap::new();
                headers.insert(
                    reqwest::header::AUTHORIZATION,
                    format!("Bearer {}", token).parse().unwrap(),
                );
                headers
            })
            .build()
            .unwrap();

        Self {
            base_url: base_url.to_string(),
            client,
        }
    }

    pub async fn get<T: for<'de> Deserialize<'de>>(&self, endpoint: &str) -> Result<T, ApiError> {
        let url = format!("{}/{}", self.base_url, endpoint);
        let res = self.client.get(&url).send().await?.json::<T>().await?;
        Ok(res)
    }

    pub async fn post<T, B>(&self, endpoint: &str, body: &B) -> Result<T, ApiError>
    where
        T: for<'de> Deserialize<'de>,
        B: Serialize,
    {
        let url = format!("{}{}", self.base_url, endpoint);
        let res = self.client
            .post(&url)
            .json(body) // manda el body como JSON
            .send()
            .await?
            .json::<T>()
            .await?;
        Ok(res)
    }
}