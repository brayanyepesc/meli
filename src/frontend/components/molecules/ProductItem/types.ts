export type Product = {
    id?: string;
    title?: string;
    thumbnail?: string;
    condition?: string;
    price?: number;
    currency_id?: string;
    description?: string;
    picture?: string;
    quantity?: number;
}

export type ProductItemProps = {
    product: Product;
}