use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::err::http_error::ApiError;
use crate::model::customer::{Customer, CustomerRequest};

pub struct CustomerRepository {
    client: ApiClient,
}

impl CustomerRepository {
    pub fn new(client: ApiClient) -> Self {
        CustomerRepository { client }
    }


    pub async fn get_all_customers(&self, page :u32, size:u32) -> Result<ApiPageableResponse<Vec<Customer>>, ApiError> {
        self.client.get("customer", Some(vec![
            ("page", page.to_string()),
            ("size", size.to_string()),
        ])).await
    }

    pub async fn get_customer_by_name(&self, name: &str) -> Result<ApiResponse<Vec<Customer>>, ApiError> {
        self.client.get(&format!("customer/name/{}", name), None).await
    }

    pub async fn get_customer_by_letter_name(&self, letter: &str) -> Result<ApiResponse<Vec<Customer>>, ApiError> {
        self.client.get(&format!("customer/name/{}", letter), None).await
    }

    pub async fn get_customer_by_containing_name(&self, word: &str) -> Result<ApiResponse<Vec<Customer>>, ApiError> {
        self.client.get(&format!("customer/name/containing/{}", word), None).await
    }

    pub async fn create_customer(&self, customer: &CustomerRequest) -> Result<ApiResponse<Customer>, ApiError> {
        self.client.post("customer", customer).await
    }
    pub async fn update_customer(&self, customer: &CustomerRequest) -> Result<ApiResponse<Customer>, ApiError> {
        self.client.put("customer", customer).await
    }

}
