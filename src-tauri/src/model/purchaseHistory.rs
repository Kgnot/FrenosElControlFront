use crate::model::inventory::Inventory;

pub struct PurchaseHistory {
    purchaseHistoryId: u32,
    inventoryId: Inventory,
    price:f32,
    datePrice: String,
}
