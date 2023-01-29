type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
)

export default RootLayout
