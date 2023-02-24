import { createContext } from 'react'

import { OutlineContextValue } from './types'

const OutlineContext = createContext<OutlineContextValue>({} as OutlineContextValue)

export { OutlineContext }
