import { theme } from '~/components/ThemeProvider'

type MainContextValue = {
  theme: keyof typeof theme.colors
}

export type { MainContextValue }
