import React, { useEffect, useState } from 'react'
import { Title } from '../atoms'
import { useParams } from 'react-router-dom'
import { Product } from '../molecules/ProductItem/types'
import useCartStore from '../../../store/CarStore'

export const ProductDetails = () => {
  const { id } = useParams() 
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/details/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  },[])
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCartStore()
  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    console.log(productToAdd)
    addToCart(productToAdd)
    setQuantity(1);
}
  const { id: productId, title, description, picture } = product || {};
  return (
    <main className='mt-20 max-h-screen w-full p-5'>
      <div className='rounded shadow-lg p-5 w-full'>
        <Title textToDisplay='Product Details' hasDescription description='Here, you can watch the details of product and make a decision' />
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full'>
          <img src={picture} alt="Imagen del producto" />
          <ul className='mt-4 space-y-4 w-full'>
            <li className='flex justify-between p-2 shadow-lg rounded'>
              <p className='font-bold text-orange-500'>ID</p>
              <span>{productId}</span>
            </li>
            <li className='flex justify-between p-2 shadow-lg rounded'>
              <p className='font-bold text-orange-500'>TITLE</p>
              <span>{title}</span>
            </li>
            <li className='flex justify-between p-2 shadow-lg rounded'>
              <span>{description}</span>
            </li>
            <li className='w-full flex gap-2'>
              <a href="/" className='w-full p-2 rounded bg-gray-500 hover:bg-gray-600 text-white text-center'>Come back</a>
              <button onClick={handleAddToCart} className='w-full p-2 rounded bg-orange-500 hover:bg-orange-600 text-white'>Buy</button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}