import { ThemeProviderTypes } from '~/components/ThemeProvider/types'

type ColorValue = `#${string}` | 'currentColor'

type Color = ColorValue | ThemeProviderTypes['Color']

type GradientValue = `linear-gradient(${string})`

type Gradient = GradientValue | ThemeProviderTypes['Gradient']

type Size = 'small' | 'medium' | 'large'

export type { Color, Gradient, Size }
