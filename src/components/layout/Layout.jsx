
import Head from 'next/head'
import React from 'react'
import { Header } from './Header'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Product Hunt Firebase + Next</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
