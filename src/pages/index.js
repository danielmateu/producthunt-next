import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layout/Layout'



// const Heading = styled.h1`color:red`

export default function Home() {

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])
  

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitched = () => {
    // console.log('Turn Dark')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (

    <div className="h-screen bg-white dark:bg-zinc-800">
      <Layout
        theme = { theme }
      />
      <h1 className='dark:text-white'>Inicio</h1>
      <button
        className='bg-green-200 p-4 rounded-full'
        onClick={handleThemeSwitched}
      >dark mode</button>
    </div>



  )
}
