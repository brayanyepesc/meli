import { useState, useCallback } from 'react';

export const useSearchProduct = (setListProductsFiltered: (term: string) => void) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }, []);

    const handleSearchClick = useCallback(() => {
        setListProductsFiltered(searchTerm);
    }, [searchTerm, setListProductsFiltered]);

    return {
        searchTerm,
        handleInputChange,
        handleSearchClick
    };

};