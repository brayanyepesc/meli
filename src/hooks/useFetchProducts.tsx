import { useEffect, useState } from "react";
import { Product } from "../frontend/components/molecules/ProductItem/types";

export const useFetchProducts = () => {
    const [listProducts, setListProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/search');
                const { results } = await response.json();
                setListProducts(results);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return listProducts;
};