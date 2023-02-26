import { ThemeProviderTypes, theme } from '~/components/ThemeProvider'
import { useMainContext } from '~/contexts/Main'
import { Color, Gradient } from '~/types/props'

type GetFillArgs = {
  fill: Color | Gradient
  variant?: 'fill' | 'contentFill' | 'hoverFill'
  withGradient?: boolean
}

type GetColorArgs = Omit<GetFillArgs, 'withGradient'>

type GetGradientArgs = GetColorArgs

const useFills = () => {
  const { theme: selectedTheme } = useMainContext()

  const getContentFillName = (fill: Color | Gradient) => {
    if (fill.startsWith('on')) return fill
    return `on${fill.charAt(0).toUpperCase()}${fill.slice(1)}`
  }

  const getColor = ({ fill, variant }: GetColorArgs) => {
    if (fill.startsWith('#')) return fill
    if (fill === 'currentColor') return fill

    return variant === 'fill' ? fill : getContentFillName(fill)
  }

  const getGradient = ({ fill, variant }: GetGradientArgs) => {
    if (fill.startsWith('linear-gradient')) return fill

    return variant === 'fill' ? fill : getContentFillName(fill)
  }

  const getFill = (args: GetFillArgs) => {
    const { fill, variant = 'fill', withGradient } = args

    const selectedFillArgs = { fill, variant }

    const selectedFill = withGradient ? getGradient(selectedFillArgs) : getColor(selectedFillArgs)
    const fillName = selectedFill as ThemeProviderTypes['Color' | 'Gradient']

    const selectedType = withGradient ? 'gradients' : 'themes'
    const fillValue = theme[selectedType][selectedTheme][fillName] ?? fill

    return fillValue
  }

  return { getFill }
}

export { useFills }
