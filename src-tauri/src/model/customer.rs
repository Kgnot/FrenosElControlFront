use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize,Deserialize)]
pub struct Customer {
    customerId: u32,
    name: String,
    identify: String,
    address: String,
    phone: String,
}

#[derive(Debug,Serialize,Deserialize)]
pub struct CustomerRequest {
    name: String,
    identify: String,
    address: String,
    phone: String,
}