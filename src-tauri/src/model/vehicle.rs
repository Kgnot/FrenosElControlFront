use crate::model::customer::Customer;

pub struct Vehicle
{
    vehicleId: u32,
    customer: Customer,
    plate: String,
    description: String,
}