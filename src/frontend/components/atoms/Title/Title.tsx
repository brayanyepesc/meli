import React from 'react'
import { TitleProps } from './types'

export const Title = ({ textToDisplay, hasDescription, description }: TitleProps) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl font-bold'>{textToDisplay}</h2>
            {
                hasDescription && (
                    <p className='text-sm text-gray-500'>{description}</p>
                )
            }
        </div>
    )
}