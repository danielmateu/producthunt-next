import Link from 'next/link'
import React from 'react'

export const Nav = () => {
    return (
        <nav className="flex gap-4">
            <Link href={'/'} className='hover:text-orange-500'>Productos</Link>
            <Link href={'/'} className='hover:text-orange-500'>Crear producto</Link>
            {/* <Link href={'/'} className='hover:text-orange-500'>Comunidad</Link>
            <Link href={'/'} className='hover:text-orange-500'>Herramietas</Link>
            <Link href={'/'} className='hover:text-orange-500'>Trabajos</Link> */}
            <Link href={'/'} className='hover:text-orange-500'>Sobre nosotros</Link>

            
        </nav>
    )
}
