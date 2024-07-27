import React, { useState } from 'react'
import { ProductItemProps } from './types';
import useCartStore from '../../../../store/CarStore';
import { MoneyFormatter } from '../../../../utils/MoneyFormatter';

export const ProductItem = ({ product }: ProductItemProps) => {
    const { title, thumbnail, condition, price = 0, currency_id } = product;
    const [quantity, setQuantity] = useState(1)
    const { addToCart, cart } = useCartStore()
    const handleAddToCart = () => {
        const productToAdd = { ...product, quantity };
        addToCart(productToAdd)
        setQuantity(1);
    }
    const cartProductQuantity = cart?.find(item => item.id === product.id)?.quantity || 0;
    return (
        <li className='grid grid-cols-1 md:grid-cols-2 p-2 shadow-lg rounded hover:scale-105 transition-all relative'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full bg-orange-500 text-white absolute -top-4 -left-4'>{condition}</div>
            <img src={thumbnail} className='rounded w-full'/>
            <div className='flex flex-col justify-between items-center'>
                <p className='font-bold text-sm'>{title}</p>
                <div className='font-bold text-lg text-blue-500'>${MoneyFormatter(price)}<span className='ml-2 text-sm test-black'>{currency_id}</span></div>
                <div className='w-full flex gap-2'>
                    <a href={`/products/${product.id}`} className='w-full p-2 text-white rounded bg-gray-500 hover:bg-gray-600 text-center'>Details</a>
                    <button onClick={handleAddToCart} className='text-center w-full p-2 text-white rounded bg-blue-500 hover:bg-blue-600'>Buy{cartProductQuantity > 0 ? (<span className="mx-2 text-sm">({cartProductQuantity})</span>) : null}</button>
                </div>
            </div>
        </li>
    )
}