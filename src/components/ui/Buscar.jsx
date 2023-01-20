import Link from 'next/link'
import React from 'react'

export const Buscar = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" className='border hidden lg:flex px-2' placeholder='Buscar productos...' />

            <button type="submit">
                <Link href='/buscar'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-extrabold text-gray-400 hover:text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </span>
                </Link>
            </button>
        </form>
    )
}
