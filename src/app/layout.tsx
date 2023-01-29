import { StyledJsxRegistry } from './components/StyledJsxRegistry'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <head />
    <body>
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </body>
  </html>
)

export default RootLayout
