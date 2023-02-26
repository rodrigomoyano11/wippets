import { GetColorParams, GetGradientParams, GetFillParams } from './types'
import { theme } from '~/components/ThemeProvider'
import { useMainContext } from '~/contexts/Main'
import { Fill, FillName } from '~/types/props'
import { formatFirstLetter } from '~/utils/formatFirstLetter'

const useFillsHook = () => {
  // Hooks
  const { theme: selectedTheme } = useMainContext()

  // Methods
  const getFillName = (fill: Fill) => {
    if (!fill.startsWith('on')) return fill
    return formatFirstLetter(fill.slice(2), 'lower')
  }

  const getContentFillName = (fill: Fill) => {
    if (fill.startsWith('on')) return fill
    return `on${formatFirstLetter(fill, 'upper')}`
  }

  const getColor = ({ fill, variant }: GetColorParams) => {
    if (fill.startsWith('#')) return fill
    if (fill === 'currentColor') return fill

    return variant === 'fill' ? fill : getContentFillName(fill)
  }

  const getGradient = ({ fill, variant }: GetGradientParams) => {
    if (fill.startsWith('linear-gradient')) return fill

    return variant === 'fill' ? fill : getContentFillName(fill)
  }

  const getFill = (params: GetFillParams) => {
    const { fill, variant = 'fill', withGradient } = params

    const fillArgs = { fill, variant }

    const selectedFill = withGradient ? getGradient(fillArgs) : getColor(fillArgs)
    const selectedVariant = withGradient ? 'gradients' : 'colors'

    const name = selectedFill as FillName
    const value = theme[selectedVariant][selectedTheme][name] ?? fill

    return value
  }

  // Return
  return {
    getFillName,
    getContentFillName,
    getFill,
  }
}

export { useFillsHook }
