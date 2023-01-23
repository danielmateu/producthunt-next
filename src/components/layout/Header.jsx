
import React, { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { MenuAdmin } from './MenuAdmin'
import { Nav } from './Nav'


export const Header = () => {

    const [usuario, setUsuario] = useState(false)
    

    return (
        <header className="border-b py-4 px-5  transition-all text-black dark:text-white">
            <div className='flex flex-col sm:flex-row items-center gap-6 justify-between'>
                <Logo />
                <Nav />
                <MenuAdmin usuario={usuario}  />
            </div>
        </header>
    )
}
