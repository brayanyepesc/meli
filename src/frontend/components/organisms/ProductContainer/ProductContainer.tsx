import React from 'react'
import { ProductContainerProps } from './types'
import { ProductItem } from '../../molecules'

export const ProductContainer = ({ listProducts }: ProductContainerProps) => {
    const hasProducts = listProducts.length > 0
    return (
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 p-5'>
            {
                hasProducts ? listProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                )) : <p>No products found</p>
            }
        </ul>
    )
}