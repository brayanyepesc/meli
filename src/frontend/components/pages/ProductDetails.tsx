import React from 'react'
import { Title } from '../atoms'
import { useParams } from 'react-router-dom'
import { useProductDetails } from '../../../hooks/useProductDetails'

export const ProductDetails = () => {
  const { id = '' } = useParams()
  const { product, handleAddToCart } = useProductDetails(id)
  const isAValidProduct = () => {
    if(product !== undefined){
      return Object.keys(product).length !== 0;
    }
  }
  return (
    <main className='mt-20 max-h-screen w-full p-5'>
      <div className='rounded shadow-lg p-5 w-full'>
        <Title textToDisplay='Product Details' hasDescription description='Here, you can watch the details of product and make a decision' />
        {
          isAValidProduct() ? (
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full'>
              <img src={product.thumbnail} alt="Imagen del producto" />
              <ul className='mt-4 space-y-4 w-full'>
                <li className='flex justify-between p-2 shadow-lg rounded'>
                  <p className='font-bold text-orange-500'>ID</p>
                  <span>{product.id}</span>
                </li>
                <li className='flex justify-between p-2 shadow-lg rounded'>
                  <p className='font-bold text-orange-500'>TITLE</p>
                  <span>{product.title}</span>
                </li>
                <li className='flex justify-between p-2 shadow-lg rounded'>
                  <span>{product.plain_text}</span>
                </li>
                <li className='w-full flex gap-2'>
                  <a href="/" className='w-full p-2 rounded bg-gray-500 hover:bg-gray-600 text-white text-center'>Come back</a>
                  <button onClick={handleAddToCart} className='w-full p-2 rounded bg-orange-500 hover:bg-orange-600 text-white'>Buy</button>
                </li>
              </ul>
            </div>
          ) : (<div className='text-center mt-10 font-bold text-orange-500'>This product does not exist.</div>)
        }
      </div>
    </main>
  )
}