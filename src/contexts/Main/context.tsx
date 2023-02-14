import { createContext } from 'react'

import { MainContextValue } from './types'

const defaultValue: MainContextValue = {
  theme: 'light',
}

const MainContext = createContext<MainContextValue>(defaultValue)

export { MainContext, defaultValue }
