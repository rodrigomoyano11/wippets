import { ThemeProviderTypes } from '~/components/ThemeProvider'

type Color = `#${string}` | 'currentColor'
type Gradient = `linear-gradient(${string})`

type MainFill = ThemeProviderTypes['Fills']['Main']
type ContentFill = ThemeProviderTypes['Fills']['Content']
type OtherFill = ThemeProviderTypes['Fills']['Other']

type WithParams<T> = { params: T }

export type { Color, Gradient, MainFill, ContentFill, OtherFill, WithParams }
