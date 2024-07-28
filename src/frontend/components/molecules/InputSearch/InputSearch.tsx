import React from 'react'
import SearchIcon from "../../../icons/search.svg";
import { InputSearchProps } from './types';
import { useSearchProduct } from '../../../../hooks/useSearchProduct';

export const InputSearch = ({ setListProductsFiltered }: InputSearchProps) => {
    const { handleInputChange, handleSearchClick } = useSearchProduct(setListProductsFiltered);
    return (
        <div className='w-full my-4 flex justify-center items-center gap-4'>
            <input onChange={handleInputChange} type="text" className='w-full bg-gray-100 border border-gray-300 rounded p-2 outline-none focus:border focus:border-blue-500'/>
            <button className='bg-blue-500 hover:bg-blue-500 text-white rounded p-2' onClick={handleSearchClick}>
                Buscar
            </button>
        </div>
    )
}