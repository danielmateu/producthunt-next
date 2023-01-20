import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl p-20">Página de Login</h1>
            <Link href="/">Inicio</Link>
        </div>
    )
}

export default Login