'use client'

import Link from 'next/link'

import { rootGlobalStyles, rootStyles } from './styles'
import { ThemeProvider } from '../components/ThemeProvider'
import { MainProvider } from '../contexts/Main'
import { OutlineProvider } from '~/contexts/Outline'

const RootPage = () => (
  <MainProvider>
    <OutlineProvider>
      <ThemeProvider>
        <h1>Home</h1>

        <p>For see your pets, please go to</p>

        <Link href="/my-pets">My Pets</Link>

        <style jsx>{rootStyles}</style>
        <style jsx global>
          {rootGlobalStyles}
        </style>
      </ThemeProvider>
    </OutlineProvider>
  </MainProvider>
)

export default RootPage
