use reqwest::Client;
use serde::{Deserialize, Serialize};
use crate::err::http_error::ApiError;

#[derive(Clone)]
pub struct ApiClient{
    base_url:String,
    client: Client,
    token: Option<String>,
}

impl ApiClient{
    pub fn new(base_url: &str) -> Self {
        let client = Client::new();
        ApiClient {
            base_url: base_url.to_string(),
            client,
            token: None,
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
            token: Some(token.to_string()),
        }
    }

    pub async fn get<T: for<'de> Deserialize<'de>>(&self, endpoint: &str,params: Option<Vec<(&str,String)>>) -> Result<T, ApiError> {
        let url = format!("{}/{}", self.base_url, endpoint);

        let mut req = self.client.get(&url); //.send().await?.json::<T>().await?;
        // add query params a la request
        if let Some(params) = params {
            req = req.query(&params);
        }
        // token:
        if let Some(token) = &self.token {
            req = req.bearer_auth(token);
        }
        let res = req.send().await.map_err(ApiError::from)?;
        let status = res.status();

        if status.is_success() {
            res.json::<T>().await.map_err(ApiError::from)
        } else {
            Err(ApiError::Status(status.as_u16()))
        }
    }

    pub async fn post<T, B>(&self, endpoint: &str, body: &B) -> Result<T, ApiError>
    where
        T: for<'de> Deserialize<'de>,
        B: Serialize,
    {
        let url = format!("{}/{}", self.base_url, endpoint);
        let res = self.client
            .post(&url)
            .json(body) // manda el body como JSON
            .send()
            .await?
            .json::<T>()
            .await?;
        Ok(res)
    }


    pub async fn put<T, B>(&self, endpoint: &str, body: &B) -> Result<T, ApiError>
    where
        T: for<'de> Deserialize<'de>,
        B: Serialize,
    {
        let url = format!("{}/{}", self.base_url, endpoint);
        let mut req = self.client.put(&url).json(body);

        if let Some(token) = &self.token {
            req = req.bearer_auth(token);
        }

        let res = req.send().await.map_err(ApiError::from)?;
        let status = res.status();

        if status.is_success() {
            res.json::<T>().await.map_err(ApiError::from)
        } else {
            Err(ApiError::Status(status.as_u16()))
        }
    }

    pub async fn delete<T>(&self, endpoint: &str) -> Result<T, ApiError>
    where
        T: for<'de> Deserialize<'de>,
    {
        let url = format!("{}/{}", self.base_url, endpoint);
        let mut req = self.client.delete(&url);

        if let Some(token) = &self.token {
            req = req.bearer_auth(token);
        }

        let res = req.send().await.map_err(ApiError::from)?;
        let status = res.status();

        if status.is_success() {
            res.json::<T>().await.map_err(ApiError::from)
        } else {
            Err(ApiError::Status(status.as_u16()))
        }
    }
}