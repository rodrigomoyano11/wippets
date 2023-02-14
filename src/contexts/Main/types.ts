import { theme } from '~/components/ThemeProvider'

type MainContextValue = {
  theme: keyof typeof theme.themes
}

export type { MainContextValue }
