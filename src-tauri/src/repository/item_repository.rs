use crate::err::http_error::ApiError;
use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::model::item::Item;

pub struct ItemRepository {
    client:ApiClient,
}

impl ItemRepository{
    pub fn new(client:  ApiClient) -> Self {
        ItemRepository { client }
    }

    pub async fn get_all_items(&self, page: u32, size: u32) -> Result<ApiPageableResponse<Vec<Item>>, ApiError> {
        self.client.get("item", Some(vec![
            ("page", page.to_string()),
            ("size", size.to_string()),
        ])).await
    }

    pub async fn get_by_type(&self, item_type: &str) -> Result<ApiResponse<Vec<Item>>, ApiError> {
        self.client.get(&format!("item/type/{}", item_type), None).await
    }

    pub async fn get_by_description(&self, description: &str) -> Result<ApiResponse<Vec<Item>>, ApiError> {
        self.client.get(&format!("item/description/{}", description), None).await
    }

    pub async fn get_by_letter(&self, letter: &str) -> Result<ApiResponse<Vec<Item>>, ApiError> {
        self.client.get(&format!("item/description/letter/{}", letter), None).await
    }

    pub async fn get_by_word_contained(&self, word: &str) -> Result<ApiResponse<Vec<Item>>, ApiError> {
        self.client.get(&format!("item/description/contain/{}", word), None).await
    }

    pub async fn create_item(&self, item: &Item) -> Result<ApiResponse<Item>, ApiError> {
        self.client.post("item", item).await
    }

    pub async fn update_item(&self, item: &Item) -> Result<ApiResponse<Item>, ApiError> {
        self.client.put("item", item).await
    }
}