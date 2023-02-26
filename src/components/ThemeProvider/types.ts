type PaletteValueKey = 0 | 10 | 20 | 25 | 30 | 35 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 98 | 99 | 100
type PaletteNameKey = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'grayScale' | 'error'

type MainFill =
  | 'primary'
  | 'primaryContainer'
  | 'secondary'
  | 'secondaryContainer'
  | 'tertiary'
  | 'tertiaryContainer'
  | 'error'
  | 'errorContainer'
  | 'background'
  | 'surface'
  | 'surfaceVariant'
  | 'surfaceInversed'

type ContentFill =
  | 'onPrimary'
  | 'onPrimaryContainer'
  | 'onSecondary'
  | 'onSecondaryContainer'
  | 'onTertiary'
  | 'onTertiaryContainer'
  | 'onError'
  | 'onErrorContainer'
  | 'onBackground'
  | 'onSurface'
  | 'onSurfaceVariant'
  | 'onSurfaceInversed'

type OtherFill =
  | 'outline'
  | 'primaryInversed'
  | 'shadow'
  | 'surfaceTint'
  | 'outlineVariant'
  | 'scrim'

type FillNameKey = MainFill | ContentFill | OtherFill

type ThemeKey = 'light' | 'dark'

type BreakpointKey = 'mobile' | 'tablet' | 'desktop'
type WeightKey = 'regular' | 'medium' | 'bold'

type PaletteValue = Record<PaletteValueKey, string>
type FillName = Record<FillNameKey, string>
type Weight = Record<WeightKey, number>

type SpacingKey =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96

type Palette = Record<PaletteNameKey, PaletteValue>
type Fill = Record<ThemeKey, FillName>
type Breakpoints = Record<BreakpointKey, number>
type Typography = {
  name: string
  weights: Weight
}
type Spacings = Record<SpacingKey, string>

type ThemeProviderTypes = {
  Palette: Palette
  Fill: Fill
  Fills: {
    Main: MainFill
    Content: ContentFill
    Other: OtherFill
  }
  Breakpoints: Breakpoints
  Typography: Typography
  Spacings: Spacings
}

export type { ThemeProviderTypes }
