import { ReactNode } from 'react'

import { Noto_Sans as NotoSans } from '@next/font/google'

import 'material-symbols'

const notoSans = NotoSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProviderComponent = ({ children }: ThemeProviderProps) => (
  <div className={notoSans.className}>{children}</div>
)

export type { ThemeProviderProps }
export { ThemeProviderComponent }
