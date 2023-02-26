import { ThemeProviderTypes } from '~/components/ThemeProvider'

type Color = `#${string}` | 'currentColor'
type Gradient = `linear-gradient(${string})`

type MainFill = ThemeProviderTypes['Fills']['Main']
type ContentFill = ThemeProviderTypes['Fills']['Content']
type OtherFill = ThemeProviderTypes['Fills']['Other']

export type { Color, Gradient, MainFill, ContentFill, OtherFill }
