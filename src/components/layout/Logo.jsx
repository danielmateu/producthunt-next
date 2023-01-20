import Link from 'next/link'
import React from 'react'
import { Buscar } from '../ui/Buscar'

export const Logo = () => {
    return (

        <div className="flex gap-6 items-center ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:rotate-90 transition-transform hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


            <Link href="/" className='bg-orange-500 hover:bg-orange-600 p-5 rounded-full w-6 h-6 flex items-center justify-center text-3xl font-bold text-white transition-all hover:rotate-180'>
                P
            </Link>
            <Buscar />
            {/* BUSCADOR */}
        </div>
    )
}
