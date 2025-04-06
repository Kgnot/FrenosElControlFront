use crate::model::itemType::ItemType;
use serde::{Serialize,Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Item {
    itemId: u32,
    itemType: ItemType,
    code: String,
    description: String,
}


