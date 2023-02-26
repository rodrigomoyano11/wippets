import { PropsWithChildren } from 'react'

import { globalStylesProviderStyles } from './styles'

type GlobalStylesProviderProps = PropsWithChildren

const GlobalStylesProviderComponent = ({ children }: GlobalStylesProviderProps) => (
  <>
    {children}

    <style jsx global>
      {globalStylesProviderStyles}
    </style>
  </>
)

export type { GlobalStylesProviderProps }
export { GlobalStylesProviderComponent }
