use crate::model::inventory::Inventory;

pub struct SaleHistory {
    saleHistoryId: u32,
    inventoryId: Inventory,
    price:f32,
    datePrice: String,

}