
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Header } from './Header'


export const Layout = ({ children, theme }) => {


    return (
        <>
            <Head>
                <title>Product Hunt Firebase + Next</title>
            </Head>

            <Header
                    theme={theme}
            />
            <main className="dark bg-white dark:bg-black">
                {children}
            </main>


        </>
    )
}
