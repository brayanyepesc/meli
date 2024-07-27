import React from 'react'
import { Title } from '../../atoms'
import { InputSearch, ProductItem } from '../../molecules'
import { ListContainerProps } from './types'
import { ProductContainer } from '../../organisms'

export const ListContainer = ({ listProducts, setListProductsFiltered }: ListContainerProps) => {
    return (
        <div className="rounded shadow-lg p-5">
            <Title textToDisplay="List of products" hasDescription description="Search for items and click to buy it" />
            <InputSearch setListProductsFiltered={setListProductsFiltered}/>
            <ProductContainer listProducts={listProducts} />
        </div>
    )
}