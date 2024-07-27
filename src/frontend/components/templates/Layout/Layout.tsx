import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <Navbar />
        {
            children
        }
    </main>
  )
}