use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize,Serialize)]
pub struct ApiResponse<T> {
    pub content: T,
    // pub error: Option<String>,
}

#[derive(Debug, Deserialize,Serialize)]
pub struct ApiPageableResponse<T> {
    pub content: T,
    pub pageable: Pageable,
    pub last: bool,
    pub totalElements: u32,
    pub totalPages: u32,
    pub size: u32,
    pub number: u32,
    pub sort: Sort,
    pub first: bool,
    pub numberOfElements: u32,
    pub empty: bool,
}

#[derive(Debug, Deserialize,Serialize)]
pub struct Pageable {
    pub pageSize: u32,
    pub pageNumber: u32,
    pub sort: Sort,
    pub offset: u32,
    pub unpaged: bool,
    pub paged: bool,
}
#[derive(Debug, Deserialize,Serialize)]
pub struct Sort {
    pub sorted: bool,
    pub unsorted: bool,
    pub empty: bool,
}
