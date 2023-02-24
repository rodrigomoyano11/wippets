import { theme } from '~/components/ThemeProvider'

type Color = `#${string}` | 'currentColor' | keyof (typeof theme.themes)['dark' | 'light']

type Size = 'small' | 'medium' | 'large'

export type { Color, Size }
