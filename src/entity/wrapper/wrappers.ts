export interface ApiResponse<T> {
    content: T;
    // error?: string; // Puedes descomentar si usas el campo `error`
}
export interface ApiPageableResponse<T> {
    content: T;
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface Pageable {
    pageSize: number;
    pageNumber: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
