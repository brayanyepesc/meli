import { useEffect, useState } from "react";
import { Product } from "../frontend/components/molecules/ProductItem/types";

const LIMIT_PER_PAGE = 20;

export const useFetchProducts = () => {
    const [listProducts, setListProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const offset = (currentPage - 1) * LIMIT_PER_PAGE;
    const totalPagesInResults = Math.ceil(totalPages / LIMIT_PER_PAGE);
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPagesInResults) {
            setCurrentPage(page);
        }
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`/api/search?limit=${LIMIT_PER_PAGE}&offset=${offset}`);
                const { results, paging } = await response.json();
                setListProducts(results);
                setTotalPages(paging.total)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [currentPage]);
    return {
        listProducts,
        totalPages,
        currentPage, 
        totalPagesInResults,
         handlePageChange
    };
};