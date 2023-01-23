import React from 'react'
import { useValidacion } from '@/hooks/useValidacion'
import validarCrearCuenta from '@/validacion/validarCrearCuenta'

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}

export const FormularioCrearCuenta = () => {

    const crearCuenta = () => {
        console.log('Creando Cuenta')
    }

    const {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange
    } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)

    const { nombre, email, password } = valores



    return (
        <form action="" className='p-10 border hover:shadow-md transition-all w-96 rounded'>
            <div className='flex flex-col my-4 '>
                <label htmlFor="nombre">Nombre</label>
                <input
                    className='px-4 py-2 dark:text-gray-500'
                    type="text"
                    id="nombre"
                    placeholder="Introduce tu nombre"
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col my-4 '>
                <label htmlFor="email">Email</label>
                <input
                    className='px-4 py-2 dark:text-gray-500'
                    type="email" id="email"
                    placeholder="Introduce tu email"
                    name='email'
                    value={email}
                    onChange={handleChange} />
            </div>
            <div className='flex flex-col my-4 '>
                <label htmlFor="password">Password</label>
                <input
                    className='px-4 py-2 dark:text-gray-500'
                    type="password"
                    id="password"
                    placeholder="Introduce tu password"
                    name='password'
                    value={password}
                    onChange={handleChange} />
            </div>
            <div className='flex justify-end'>
                <input
                    type="submit"
                    value='Crear cuenta'
                    className='hover:text-orange-600'
                    onSubmit={handleSubmit}
                />
            </div>
        </form>
    )
}
