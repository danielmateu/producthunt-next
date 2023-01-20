import Link from 'next/link'
import React from 'react'

export const MenuAdmin = () => {
    return (
        <div className="flex gap-2 items-center">
            <p className="hover:text-orange-500 hidden lg:flex ">How to post a product?</p>
            {/* <button type="button" className=''>Sign in</button> */}
            <Link href="/" className="hover:text-orange-500 ">Sign in</Link>
            <Link href="/" className='hidden md:flex bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition-colors'>Sign up</Link>
        </div>
    )
}
