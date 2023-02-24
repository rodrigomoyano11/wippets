import { Dispatch, SetStateAction } from 'react'

type OutlineItem = {
  id: string
  title: string
  variant: string
  level: number
}

type Outline = {
  [key: string]: OutlineItem[]
}

type OutlineContextValue = {
  outline: Outline
  setOutline: Dispatch<SetStateAction<Outline>>
}

export type { OutlineContextValue, Outline, OutlineItem }
