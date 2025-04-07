use serde::{Deserialize, Serialize};
use crate::model::customer::Customer;

#[derive(Debug, Deserialize,Serialize)]
pub struct Vehicle
{
    vehicleId: u32,
    customer: Customer,
    plate: String,
    description: String,
}

#[derive(Debug, Deserialize,Serialize)]
pub struct VehicleRequest{
    customer: Customer,
    plate: String,
    description: String,
}