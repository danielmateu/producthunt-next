
import React, { useState } from 'react'

import { Logo } from './Logo'
import { MenuAdmin } from './MenuAdmin'
import { Nav } from './Nav'


export const Header = () => {

    const [usuario, setUsuario] = useState(false)
    return (
        <header className="border py-4 px-5 hover:bg-slate-50 transition-all">
            <div className='flex flex-col sm:flex-row items-center gap-6 justify-between'>
                <Logo />
                <Nav />
                <MenuAdmin usuario={usuario} />
            </div>
        </header>
    )
}
