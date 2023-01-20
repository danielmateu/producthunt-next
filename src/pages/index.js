import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layout/Layout'



// const Heading = styled.h1`color:red`

export default function Home() {


  return (

    <div className="h-screen bg-white dark:bg-zinc-800">
      <Layout />
      <h1 className='dark:text-white'>Inicio</h1>
      
    </div>



  )
}
