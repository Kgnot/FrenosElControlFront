use crate::model::customer::Customer;
use crate::model::item::Item;
use crate::model::payment::Payment;
use crate::model::vehicle::Vehicle;

pub struct Invoice
{
    invoiceId: u32,
    dateOrdered: String,
    total: f32,
    vehicle: Vehicle,
    paymentType: Payment,
    customer: Customer,
    invoiceItems: Vec<Item>,
}