import React from 'react'
import { SelectorPagesProps } from './types'

export const SelectorPages = ({ currentPage, totalPagesInResults, handlePageChange }: SelectorPagesProps) => {
    return (
        <div className='flex justify-between items-center w-full p-2 bg-white shadow-lg rounded'>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='p-1 rounded bg-gray-500 hover:bg-gray-600 text-white shadow-lg'
            >
                Previous
            </button>
            <span> Page {currentPage} of {totalPagesInResults} </span>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPagesInResults}
                className='p-1 rounded bg-gray-500 hover:bg-gray-600 text-white shadow-lg'
            >
                Next
            </button>
        </div>
    )
}