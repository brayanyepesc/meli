import React from 'react'
import { LuShoppingCart } from "react-icons/lu"
import useCartStore from '../../../../store/CarStore';

export const Navbar = () => {
  const { cart } = useCartStore();
  return (
    <nav className="w-full h-16 shadow-lg bg-orange-500 fixed top-0 z-10">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-white">MELI</h1>
        <div className="flex justify-center items-center">
          <a href="/" className="text-xl font-bold text-white mr-4">Home</a>
          <a href="/cart" className="flex justify-center items-center text-xl font-bold text-white"><LuShoppingCart className="mr-2 text-xl font-bold text-white" />{cart?.length > 0 ? (<span className="w-6 h-6 rounded-full bg-orange-600 flex justify-center items-center text-sm">{cart?.length}</span>) : null}</a>
        </div>
      </div>
    </nav>
  )
}