use crate::api::api_client::ApiClient;
use crate::api::api_response::{ApiPageableResponse, ApiResponse};
use crate::err::http_error::ApiError;
use crate::model::vehicle::{Vehicle, VehicleRequest};

pub struct VehicleRepository{
    client: ApiClient,
}

impl VehicleRepository {
    pub fn new(client: ApiClient) -> Self {
        VehicleRepository { client }
    }

    pub async fn get_all_vehicles(&self, page: u32, size: u32) -> Result<ApiPageableResponse<Vec<Vehicle>>, ApiError> {
        self.client.get("vehicles", Some(vec![
            ("page", page.to_string()),
            ("size", size.to_string()),
        ])).await
    }

    pub async fn get_vehicle_by_id(&self, id: u32) -> Result<ApiResponse<Vehicle>, ApiError> {
        self.client.get(&format!("vehicles/{}", id), None).await
    }

    pub async fn get_vehicles_by_customer_id(&self, customer_id: u32) -> Result<ApiResponse<Vec<Vehicle>>, ApiError> {
        self.client.get(&format!("vehicles/customer/{}", customer_id), None).await
    }

    pub async fn create_vehicle(&self, vehicle: &VehicleRequest) -> Result<ApiResponse<Vehicle>, ApiError> {
        self.client.post("vehicles", vehicle).await
    }

    pub async fn delete_vehicle(&self, id: u32) -> Result<(), ApiError> {
        self.client.delete::<()>(&format!("vehicles/{}", id)).await
    }
}