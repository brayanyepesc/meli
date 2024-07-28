import { useState, useEffect } from 'react';
import useCartStore from '../store/CarStore';

export const useProductDetails = (id: string) => {

    const [product, setProduct] = useState<any>();
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/details/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [])
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCartStore()
    const handleAddToCart = () => {
        const productToAdd = { ...product, quantity };
        addToCart(productToAdd)
        setQuantity(1);
    }

    return {
        product,
        handleAddToCart
    };

};