export interface CartsSlice {
    totalQuantity: number,
    discountedTotal: number,
    totalProducts: number,
    total: number,
    products: ProductCart[]
}

export interface ProductCatalog {
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    images: [string],
    stock: number
}

export interface ProductCart {
    id: number,
    title: string,
    discountPercentage: number,
    price: number,
    isDeleted: boolean,
    thumbnail: string,
    quantity: number,
    total: number,
    discountedTotal: number,
}

export interface ProductDescription {
    id: number,
    title: string,
    discountPercentage: number,
    price: number,
    images: [string],
    thumbnail: string,
    rating: number,
    tags: [string],
    availabilityStatus: string,
    shippingInformation: string,
    warrantyInformation: string,
    description: string,
    stock: number
}
