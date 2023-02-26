import { PropsWithChildren } from 'react'

import { defaultValue, MainContext } from './context'
import { MainContextValue } from './types'

type MainProviderProps = PropsWithChildren<{
  value?: MainContextValue
}>

const MainProvider = ({ children, value = defaultValue }: MainProviderProps) => (
  <MainContext.Provider value={value}>{children}</MainContext.Provider>
)

export { MainProvider }
