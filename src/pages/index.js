import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import React from 'react'
import { Layout } from '@/components/layout/Layout'



// const Heading = styled.h1`color:red`

export default function Home() {

  return (
    <>
      <Layout />
      <h1 className='text-center'>Inicio</h1>
    </>

  )
}
