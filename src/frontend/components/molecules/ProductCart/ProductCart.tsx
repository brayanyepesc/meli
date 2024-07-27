import React from 'react'
import { Product } from '../ProductItem/types'
import useCartStore from '../../../../store/CarStore';
import { MoneyFormatter } from '../../../../utils/MoneyFormatter';

export const ProductCart = ({ product }: { product: Product }) => {
    const { quantity, thumbnail, title, price = 0, currency_id } = product;
    const { removeFromCart, updateQuantity } = useCartStore();
    const handleRemoveFromCart = (product: any) => {
        const { id } = product;
        removeFromCart(id)
    }
    const handleUpdateQuantity = (product: any, quantity: number) => {
        const { id } = product;
        updateQuantity(id, quantity)
    }
    return (
        <li className='grid grid-cols-1 md:grid-cols-2 p-2 shadow-lg rounded hover:scale-105 transition-all'>
            <img src={thumbnail} className='rounded w-full' />
            <div className='flex flex-col justify-between items-center'>
                <p className='font-bold text-sm'>{title}</p>
                <div className='font-bold text-lg text-blue-500'>${MoneyFormatter(price)}<span className='ml-2 text-sm test-black'>{currency_id}</span></div>
                <div className='w-full flex gap-2'>
                <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleUpdateQuantity(product, parseInt(e.target.value))}
                        className="p-1 rounded bg-white border border-gray-300 text-center w-16"
                    />
                    <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="p-1 rounded bg-gray-500 hover:bg-gray-600 transition-all text-white w-full"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </li>
    )
}