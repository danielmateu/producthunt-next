import Link from 'next/link'
import React from 'react'

export const Nav = () => {
    return (
        <nav className="flex gap-4">
            <Link href={'/productos-populares'} className='hover:text-orange-500'>Productos</Link>
            <Link href={'/crear-producto'} className='hover:text-orange-500'>Crear producto</Link>
            <Link href={'/sobre-nosotros'} className='hover:text-orange-500'>Sobre nosotros</Link>
        </nav>
    )
}
