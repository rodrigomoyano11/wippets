import { Providers } from './components/Providers'
import { Header } from '../components/Header'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
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
