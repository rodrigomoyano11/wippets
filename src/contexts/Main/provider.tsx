import { defaultValue, MainContext } from './context'
import { MainContextValue } from './types'

type MainProviderProps = {
  children: React.ReactNode
  value?: MainContextValue
}

const MainProvider = ({ children, value = defaultValue }: MainProviderProps) => (
  <MainContext.Provider value={value}>{children}</MainContext.Provider>
)

export { MainProvider }
