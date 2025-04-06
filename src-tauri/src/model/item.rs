use crate::model::itemType::ItemType;

pub struct Item {
    itemId: u32,
    itemType: ItemType,
    code: String,
    description: String,
}