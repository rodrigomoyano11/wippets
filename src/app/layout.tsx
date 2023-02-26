import { PropsWithChildren } from 'react'

import { Metadata } from 'next'

import { Providers } from './components/Providers'
import { Header } from '../components/Header'

const metadata: Metadata = {
  title: 'Wippets',
  description: 'Pet registration and identification service',
  authors: {
    name: 'Rodrigo Moyano',
    url: 'https://linkedin.com/in/rodrigomoyano11',
  },
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head />
    <body>
      <Providers>
        <Header />

        {children}
      </Providers>
    </body>
  </html>
)

export { metadata }
export default RootLayout
