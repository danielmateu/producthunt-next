import Link from 'next/link'
import React from 'react'

export const Nav = () => {
    return (
        <nav className="hidden lg:flex gap-6">
            <Link href={'/'} className='hover:text-orange-500'>Inicio</Link>
            <Link href={'/'} className='hover:text-orange-500'>Populares</Link>
            <Link href={'/'} className='hover:text-orange-500'>Nuevo Producto</Link>
        </nav>
    )
}
