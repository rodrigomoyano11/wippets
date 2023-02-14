'use client'

import Link from 'next/link'

import { ThemeProvider } from './components/ThemeProvider'
import { rootGlobalStyles, rootStyles } from './styles'
import { MainProvider } from '../contexts/Main'

const RootPage = () => (
  <MainProvider value={{ theme: 'dark' }}>
    <ThemeProvider>
      <h1>Home</h1>

      <p>For see your pets, please go to</p>

      <Link href="/my-pets">My Pets</Link>

      <style jsx>{rootStyles}</style>
      <style jsx global>
        {rootGlobalStyles}
      </style>
    </ThemeProvider>
  </MainProvider>
)

export default RootPage
