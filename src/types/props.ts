import { Color, Gradient } from './general'
import { ThemeProviderTypes } from '~/components/ThemeProvider/types'

type FillName = keyof ThemeProviderTypes['Fill']['dark' | 'light']

type Fill = Color | Gradient | FillName

type Size = 'small' | 'medium' | 'large'

export type { FillName, Fill, Size }
