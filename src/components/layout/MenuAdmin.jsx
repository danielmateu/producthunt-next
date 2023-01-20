import Link from 'next/link'
import React from 'react'

export const MenuAdmin = ({ usuario }) => {
    return (
        <div className="flex gap-4 items-center">
            {usuario ? (
                <>
                    <p>Hola: Dani</p>
                    <Link href="/" className=" bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition-colors ">Sign out</Link>
                </>
            ) : (
                <>
                    <Link href='/como-postear-producto' className="hover:text-orange-500 hidden lg:flex ">How to post a product?</Link>
                    <Link href="/login" className="hover:text-orange-500 ">Sign in</Link>
                    <Link href="/crear-cuenta" className='hidden md:flex bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition-colors'>Sign up</Link>
                </>)
            }
            {/* <button type="button" className=''>Sign in</button> */}


        </div>
    )
}
