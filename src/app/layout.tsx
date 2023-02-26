import { PropsWithChildren } from 'react'

import { Providers } from './components/Providers'
import { Header } from '../components/Header'

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

export default RootLayout
