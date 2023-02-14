'use client'

import Link from 'next/link'

const RootPage = () => (
  <>
    <h1>Home</h1>

    <p>For see your pets, please go to</p>

    <Link href="/my-pets">My Pets</Link>

    <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
  </>
)

export default RootPage
