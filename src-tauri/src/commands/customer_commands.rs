use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::commands::base_url::BASE_URL;
// use crate::err::http_error::ApiError;
use crate::model::customer::{Customer, CustomerRequest};
use crate::repository::customer_repository::CustomerRepository;

#[tauri::command]
pub async fn get_all_customer(token:String, page:u32, size:u32) -> Result<ApiPageableResponse<Vec<Customer>>,String> {
    let client: ApiClient = ApiClient::with_token(BASE_URL,&token);
    let repository: CustomerRepository = CustomerRepository::new(client);
    repository.get_all_customers(page,size)
        .await
        .map_err(|e| e.to_string())

}

#[tauri::command]
pub async fn get_customer_by_name(token: String, name: String) -> Result<ApiResponse<Vec<Customer>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repository = CustomerRepository::new(client);

    repository.get_customer_by_name(&name)
        .await
        .map_err(|err| format!("Error getting customer by name: {}", err))
}

#[tauri::command]
pub async fn get_customer_by_letter_name(token: String, letter: String) -> Result<ApiResponse<Vec<Customer>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repository = CustomerRepository::new(client);

    repository.get_customer_by_letter_name(&letter)
        .await
        .map_err(|err| format!("Error getting customer by letter name: {}", err))
}

#[tauri::command]
pub async fn get_customer_by_containing_name(token: String, word: String) -> Result<ApiResponse<Vec<Customer>>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repository = CustomerRepository::new(client);

    repository.get_customer_by_containing_name(&word)
        .await
        .map_err(|err| format!("Error getting customer by containing name: {}", err))
}

#[tauri::command]
pub async fn create_customer(token: String, customer: CustomerRequest) -> Result<ApiResponse<Customer>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repository = CustomerRepository::new(client);

    repository.create_customer(&customer)
        .await
        .map_err(|err| format!("Error creating customer: {}", err))
}

#[tauri::command]
pub async fn update_customer(token: String, customer: CustomerRequest) -> Result<ApiResponse<Customer>, String> {
    let client = ApiClient::with_token(BASE_URL, &token);
    let repository = CustomerRepository::new(client);

    repository.update_customer(&customer)
        .await
        .map_err(|err| format!("Error updating customer: {}", err))
}

