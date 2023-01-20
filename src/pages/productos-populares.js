import { Layout } from '@/components/layout/Layout'
import React from 'react'

const ProductosPopulares = () => {
    return (
        <div className="h-screen
        bg-white dark:bg-zinc-800 text-black dark:text-white">
            <Layout />
            <h1>Productos Populares</h1>
        </div>
    )
}

export default ProductosPopulares