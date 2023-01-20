import { FormularioCrearCuenta } from '@/components/layout/FormularioCrearCuenta'
import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const Crearcuenta = () => {
    return (
        <div 
        className="h-screen bg-white dark:bg-zinc-800 text-black dark:text-white">
            <Layout />
            <main 
                className='flex flex-col items-center justify-center py-10 '>
                <h1 className='text-4xl mb-10'>Crear Cuenta</h1>
                <FormularioCrearCuenta />
                <p className='py-5'>Si ya tienes cuenta haz click <Link href='/login' className='hover:text-orange-600 font-semibold'>aquí</Link></p>
            </main>
        </div>
    )
}

export default Crearcuenta