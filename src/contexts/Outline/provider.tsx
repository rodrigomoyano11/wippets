import { useMemo, useState } from 'react'

import { OutlineContext } from './context'
import { OutlineContextValue } from './types'

type DefaultValue = Pick<OutlineContextValue, 'outline'>

type OutlineProviderProps = {
  children: React.ReactNode
  initialValue?: DefaultValue
}

const defaultValue: DefaultValue = { outline: {} }

const OutlineProvider = ({ children, initialValue = defaultValue }: OutlineProviderProps) => {
  const [outline, setOutline] = useState<OutlineContextValue['outline']>(initialValue.outline)

  const value = useMemo(() => ({ outline, setOutline }), [outline])

  return <OutlineContext.Provider value={value}>{children}</OutlineContext.Provider>
}

export { OutlineProvider }
