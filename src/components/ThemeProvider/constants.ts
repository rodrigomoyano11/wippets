import { ThemeProviderTypes } from './types'

// General
const baseValues = {
  colors: {
    main: '#376ede',
    black: '#000000',
    white: '#ffffff',
  },
}

// Fills
const palette: ThemeProviderTypes['Palette'] = {
  primary: {
    0: baseValues.colors.black,
    10: '#001946',
    20: '#002c71',
    25: '#003687',
    30: '#00419e',
    35: '#004cb6',
    40: '#1658c7',
    50: '#3c72e2',
    60: '#5a8cfe',
    70: '#87a9ff',
    80: '#b1c5ff',
    90: '#dae2ff',
    95: '#eef0ff',
    98: '#faf8ff',
    99: '#fefbff',
    100: baseValues.colors.white,
  },

  secondary: {
    0: baseValues.colors.black,
    10: '#350041',
    20: '#560069',
    25: '#68007e',
    30: '#7a0093',
    35: '#8c00a9',
    40: '#a001c0',
    50: '#bd34dc',
    60: '#db54f8',
    70: '#eb82ff',
    80: '#f6adff',
    90: '#fed6ff',
    95: '#ffebfc',
    98: '#fff7fa',
    99: '#fffbff',
    100: baseValues.colors.white,
  },

  tertiary: {
    0: baseValues.colors.black,
    10: '#001f29',
    20: '#003544',
    25: '#004153',
    30: '#004d62',
    35: '#005a71',
    40: '#006781',
    50: '#0081a2',
    60: '#009dc4',
    70: '#3bb8e0',
    80: '#5fd4fd',
    90: '#b9eaff',
    95: '#def4ff',
    98: '#f3faff',
    99: '#fafdff',
    100: baseValues.colors.white,
  },

  neutral: {
    0: baseValues.colors.black,
    10: '#001f25',
    20: '#00363f',
    25: '#00424d',
    30: '#004e5b',
    35: '#005b69',
    40: '#006878',
    50: '#008396',
    60: '#009fb6',
    70: '#29bbd5',
    80: '#53d7f1',
    90: '#a6eeff',
    95: '#d6f6ff',
    98: '#effbff',
    99: '#f8fdff',
    100: baseValues.colors.white,
  },

  grayScale: {
    0: baseValues.colors.black,
    10: '#191b23',
    20: '#2e3038',
    25: '#393b43',
    30: '#44464f',
    35: '#50525a',
    40: '#5c5e67',
    50: '#757780',
    60: '#8f9099',
    70: '#aaabb4',
    80: '#c5c6d0',
    90: '#e1e2ec',
    95: '#f0f0fa',
    98: '#faf8ff',
    99: '#fefbff',
    100: baseValues.colors.white,
  },

  error: {
    0: baseValues.colors.black,
    10: '#410002',
    20: '#690005',
    25: '#7e0007',
    30: '#93000a',
    35: '#a80710',
    40: '#ba1a1a',
    50: '#de3730',
    60: '#ff5449',
    70: '#ff897d',
    80: '#ffb4ab',
    90: '#ffdad6',
    95: '#ffedea',
    98: '#fff8f7',
    99: '#fffbff',
    100: baseValues.colors.white,
  },
}

const colors: ThemeProviderTypes['Fill'] = {
  light: {
    primary: palette.primary[40],
    onPrimary: baseValues.colors.white,
    primaryContainer: palette.primary[90],
    onPrimaryContainer: palette.primary[10],
    secondary: palette.secondary[40],
    onSecondary: baseValues.colors.white,
    secondaryContainer: palette.secondary[90],
    onSecondaryContainer: palette.secondary[10],
    tertiary: palette.tertiary[40],
    onTertiary: baseValues.colors.white,
    tertiaryContainer: palette.tertiary[90],
    onTertiaryContainer: palette.tertiary[10],
    error: palette.error[40],
    onError: baseValues.colors.white,
    errorContainer: palette.error[90],
    onErrorContainer: palette.error[10],
    background: palette.neutral[98],
    onBackground: palette.neutral[10],
    surface: palette.neutral[98],
    onSurface: palette.neutral[10],
    surfaceVariant: palette.grayScale[80],
    onSurfaceVariant: palette.grayScale[30],
    outline: palette.grayScale[50],
    onSurfaceInversed: palette.neutral[95],
    surfaceInversed: palette.neutral[20],
    primaryInversed: palette.primary[90],
    shadow: baseValues.colors.black,
    surfaceTint: palette.primary[60],
    outlineVariant: palette.grayScale[80],
    scrim: baseValues.colors.black,
  },
  dark: {
    primary: palette.primary[40],
    onPrimary: palette.primary[10],
    primaryContainer: palette.primary[60],
    onPrimaryContainer: palette.primary[90],
    secondary: palette.secondary[40],
    onSecondary: palette.secondary[10],
    secondaryContainer: palette.secondary[60],
    onSecondaryContainer: palette.secondary[90],
    tertiary: palette.tertiary[40],
    onTertiary: palette.tertiary[10],
    tertiaryContainer: palette.tertiary[60],
    onTertiaryContainer: palette.tertiary[90],
    error: palette.error[40],
    onError: palette.error[10],
    errorContainer: palette.error[60],
    onErrorContainer: palette.error[90],
    background: palette.neutral[10],
    onBackground: palette.neutral[90],
    surface: palette.neutral[10],
    onSurface: palette.neutral[90],
    surfaceVariant: palette.grayScale[30],
    onSurfaceVariant: palette.grayScale[80],
    outline: palette.grayScale[50],
    onSurfaceInversed: palette.neutral[10],
    surfaceInversed: palette.neutral[90],
    primaryInversed: palette.primary[60],
    shadow: baseValues.colors.black,
    surfaceTint: palette.primary[40],
    outlineVariant: palette.grayScale[30],
    scrim: baseValues.colors.black,
  },
}

const gradients: ThemeProviderTypes['Fill'] = {
  light: {
    primary: `linear-gradient(to right top, ${palette.primary[40]}, ${palette.primary[70]})`,
    onPrimary: baseValues.colors.white,
    primaryContainer: `linear-gradient(to right top, ${palette.primary[90]}, ${palette.primary[70]})`,
    onPrimaryContainer: palette.primary[10],
    secondary: `linear-gradient(to right top, ${palette.secondary[40]}, ${palette.secondary[70]})`,
    onSecondary: baseValues.colors.white,
    secondaryContainer: `linear-gradient(to right top, ${palette.secondary[90]}, ${palette.secondary[70]})`,
    onSecondaryContainer: palette.secondary[10],
    tertiary: `linear-gradient(to right top, ${palette.tertiary[40]}, ${palette.tertiary[70]})`,
    onTertiary: baseValues.colors.white,
    tertiaryContainer: `linear-gradient(to right top, ${palette.tertiary[90]}, ${palette.tertiary[70]})`,
    onTertiaryContainer: palette.tertiary[10],
    error: `linear-gradient(to right top, ${palette.error[40]}, ${palette.error[70]})`,
    onError: baseValues.colors.white,
    errorContainer: `linear-gradient(to right top, ${palette.error[90]}, ${palette.error[70]})`,
    onErrorContainer: palette.error[10],
    background: `linear-gradient(to right top, ${palette.neutral[98]}, ${palette.neutral[95]})`,
    onBackground: palette.neutral[10],
    surface: `linear-gradient(to right top, ${palette.neutral[98]}, ${palette.neutral[95]})`,
    onSurface: palette.neutral[10],
    surfaceVariant: `linear-gradient(to right top, ${palette.grayScale[80]}, ${palette.grayScale[70]})`,
    onSurfaceVariant: palette.grayScale[30],
    outline: `linear-gradient(to right top, ${palette.grayScale[50]}, ${palette.grayScale[40]})`,
    onSurfaceInversed: palette.neutral[95],
    surfaceInversed: palette.neutral[20],
    primaryInversed: `linear-gradient(to right top, ${palette.primary[90]}, ${palette.primary[70]})`,
    shadow: baseValues.colors.black,
    surfaceTint: `linear-gradient(to right top, ${palette.primary[60]}, ${palette.primary[50]})`,
    outlineVariant: `linear-gradient(to right top, ${palette.grayScale[80]}, ${palette.grayScale[70]})`,
    scrim: baseValues.colors.black,
  },
  dark: {
    primary: `linear-gradient(to right top, ${palette.primary[40]}, ${palette.primary[70]})`,
    onPrimary: palette.primary[10],
    primaryContainer: `linear-gradient(to right top, ${palette.primary[60]}, ${palette.primary[40]})`,
    onPrimaryContainer: palette.primary[90],
    secondary: `linear-gradient(to right top, ${palette.secondary[40]}, ${palette.secondary[70]})`,
    onSecondary: palette.secondary[10],
    secondaryContainer: `linear-gradient(to right top, ${palette.secondary[60]}, ${palette.secondary[40]})`,
    onSecondaryContainer: palette.secondary[90],
    tertiary: `linear-gradient(to right top, ${palette.tertiary[40]}, ${palette.tertiary[70]})`,
    onTertiary: palette.tertiary[10],
    tertiaryContainer: `linear-gradient(to right top, ${palette.tertiary[60]}, ${palette.tertiary[40]})`,
    onTertiaryContainer: palette.tertiary[90],
    error: `linear-gradient(to right top, ${palette.error[40]}, ${palette.error[70]})`,
    onError: palette.error[10],
    errorContainer: `linear-gradient(to right top, ${palette.error[60]}, ${palette.error[40]})`,
    onErrorContainer: palette.error[90],
    background: `linear-gradient(to right top, ${palette.neutral[10]}, ${palette.neutral[20]})`,
    onBackground: palette.neutral[90],
    surface: `linear-gradient(to right top, ${palette.neutral[10]}, ${palette.neutral[20]})`,
    onSurface: palette.neutral[90],
    surfaceVariant: `linear-gradient(to right top, ${palette.grayScale[20]}, ${palette.grayScale[30]})`,
    onSurfaceVariant: palette.grayScale[80],
    outline: `linear-gradient(to right top, ${palette.grayScale[50]}, ${palette.grayScale[40]})`,
    onSurfaceInversed: palette.neutral[10],
    surfaceInversed: palette.neutral[90],
    primaryInversed: `linear-gradient(to right top, ${palette.primary[60]}, ${palette.primary[40]})`,
    shadow: baseValues.colors.black,
    surfaceTint: `linear-gradient(to right top, ${palette.primary[60]}, ${palette.primary[50]})`,
    outlineVariant: `linear-gradient(to right top, ${palette.grayScale[20]}, ${palette.grayScale[30]})`,
    scrim: baseValues.colors.black,
  },
}

// Breakpoints
const breakpoints: ThemeProviderTypes['Breakpoints'] = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
}

// Typography
const typography: ThemeProviderTypes['Typography'] = {
  name: 'Noto Sans',
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
}

// Spacings
const spacings: ThemeProviderTypes['Spacings'] = {
  0: '0rem',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.125rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const theme = {
  palette,
  colors,
  gradients,
  breakpoints,
  typography,
  spacings,
}

export { theme }
