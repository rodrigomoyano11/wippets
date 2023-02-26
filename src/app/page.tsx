'use client'

import Link from 'next/link'

import { rootGlobalStyles, rootStyles } from './styles'

const RootPage = () => (
  <>
    <h1>Home</h1>

    <p>For see your pets, please go to</p>

    <Link href="/my-pets">My Pets</Link>

    <style jsx>{rootStyles}</style>
    <style jsx global>
      {rootGlobalStyles}
    </style>
  </>
)

export default RootPage
