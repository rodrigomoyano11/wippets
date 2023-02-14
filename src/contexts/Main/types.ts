import { theme } from '~/app/components/ThemeProvider'

type MainContextValue = {
  theme: keyof typeof theme.themes
}

export type { MainContextValue }
