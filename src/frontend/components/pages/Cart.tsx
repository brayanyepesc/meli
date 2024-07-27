import React from 'react'
import { Title } from '../atoms'
import useCartStore from '../../../store/CarStore';
import { Product } from '../molecules/ProductItem/types';
import { ProductCart } from '../molecules/ProductCart/ProductCart';
import { MoneyFormatter } from '../../../utils/MoneyFormatter';
import { GenerateOrder } from '../../../utils/GenerateOrder';

export const Cart = () => {
    const { cart, clearCart } = useCartStore();
    const totalOrdered = cart.reduce((acc: number, item: any) => acc + item.quantity * item.price, 0)
    const hasCartItems = cart.length > 0
    return (
        <main className='mt-20 max-h-screen w-full p-5'>
            <div className='rounded shadow-lg p-5 w-full'>
                <Title textToDisplay='My cart' hasDescription description='Here, you find your products selected to buy' />
                <ul className='grid grid-cols-1 md:grid-cols-3 place-items-center w-full gap-10 mt-5'>
                    {
                        hasCartItems ? cart.map((product: Product) => (
                            <ProductCart key={product.id} product={product} />
                        )) : <p className='text-center'>There are no items in your cart</p>
                    }
                </ul>
                {
                    hasCartItems && (
                        <div className="flex justify-between items-center shadow-lg p-2 rounded bg-orange-500 mt-5">
                            <h2 className="text-xl font-bold text-center text-white">Total</h2>
                            <button className="p-2 text-white rounded shadow-lg">${MoneyFormatter(totalOrdered)}</button>
                            <button onClick={() => GenerateOrder({cart, clearCart})} className="p-2 text-white bg-orange-600 hover:bg-orange-700 rounded shadow-lg">Generate order</button>
                        </div>
                    )
                }
            </div>
        </main>
    )
}