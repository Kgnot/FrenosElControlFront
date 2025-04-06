use crate::model::brandCar::BrandCar;
use crate::model::carType::CarType;

pub struct Inventory
{
    inventoryId:u32,
    carType:CarType,
    brandCar: BrandCar,
    name:String,
    quantity:u32,
    imgUrl:String,
    notes:String
}