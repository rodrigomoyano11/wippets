import { theme } from './constants'

type Breakpoint = keyof typeof theme.breakpoints

type Color = keyof (typeof theme.themes)['dark' | 'light']

type Gradient = keyof (typeof theme.gradients)['dark' | 'light']

type Typography = keyof typeof theme.typography

type ThemeProviderTypes = {
  Breakpoint: Breakpoint
  Color: Color
  Gradient: Gradient
  Typography: Typography
}

export type { ThemeProviderTypes }
