
import React from 'react'

import { Logo } from './Logo'
import { MenuAdmin } from './MenuAdmin'
import { Nav } from './Nav'


export const Header = () => {
    return (
        <header className="border shadow-sm p-6">
            <div className='flex items-center gap-6 justify-around'>
                <Logo />
                <Nav />
                <MenuAdmin />
            </div>
        </header>
    )
}
