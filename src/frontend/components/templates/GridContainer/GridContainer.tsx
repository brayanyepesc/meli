import React from 'react'

export const GridContainer = ({children,}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-1 p-5 gap-5 mt-20'>
            {children}
        </div>
    )
}