import Link from 'next/link'
import React from 'react'

const Login = ({theme}) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-800 text-black dark:text-white">
            <h1 className="text-center text-4xl p-20">Página de Login</h1>
            <Link href="/">Inicio</Link>
        </div>
    )
}

export default Login