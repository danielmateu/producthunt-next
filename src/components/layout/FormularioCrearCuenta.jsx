import React from 'react'

export const FormularioCrearCuenta = () => {
    return (
        <form action="" className='p-10 border hover:shadow-md transition-all w-96 rounded'>
            <div className='flex flex-col my-4 '>
                <label htmlFor="nombre">Nombre</label>
                <input className='px-4 py-2' type="text" id="nombre" placeholder="Introduce tu nombre" name='nombre' />
            </div>
            <div className='flex flex-col my-4 '>
                <label htmlFor="email">Email</label>
                <input className='px-4 py-2' type="email" id="email" placeholder="Introduce tu email" name='email' />
            </div>
            <div className='flex flex-col my-4 '>
                <label htmlFor="password">Password</label>
                <input className='px-4 py-2' type="password" id="password" placeholder="Introduce tu password" name='password' />
            </div>
            <div className='flex justify-end'>
                <input type="submit" value='Crear cuenta' className='hover:text-orange-600' />
            </div>
        </form>
    )
}
