import { theme } from '~/components/ThemeProvider'
import { useMainContext } from '~/contexts/Main'
import { Color } from '~/types/props'

const useColors = () => {
  const { theme: selectedTheme } = useMainContext()

  const getColorByName = (color: Color) => {
    if (color.startsWith('#')) return color
    if (color === 'currentColor') return color

    const selectedColor = color as keyof (typeof theme.themes)['dark' | 'light']
    return theme.themes[selectedTheme][selectedColor]
  }

  return { getColorByName }
}

export { useColors }
