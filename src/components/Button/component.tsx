/* eslint-disable complexity */
/* eslint-disable no-negated-condition */
'use client'

import { PropsWithChildren } from 'react'

import { buttonStyles } from './styles'
import { Text } from '../Text'
import { useFills } from '~/hooks/useFills'
import { Color, Gradient, Size } from '~/types/props'

type Variant = 'filled' | 'bordered' | 'text'

type OthersFills =
  | 'outline'
  | 'inverseOnSurface'
  | 'inverseSurface'
  | 'inversePrimary'
  | 'shadow'
  | 'surfaceTint'
  | 'outlineVariant'
  | 'scrim'

type ContentFills =
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

type ButtonProps = {
  variant?: Variant
  size?: Size
  withGradient?: boolean
  fill?: Exclude<Color | Gradient, ContentFills | OthersFills>
  contentFill?: Color | Gradient
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const ButtonComponent = (props: PropsWithChildren<ButtonProps>) => {
  // Props
  const {
    children,
    variant = 'filled',
    size = 'medium',
    withGradient = false,
    fill = 'primary',
    contentFill,
    onClick,
    disabled = false,
    className = '',
  } = props

  // Hooks
  const { getFill } = useFills()

  // Exceptions
  const fillIsCustom = fill.startsWith('#') || fill.includes('gradient')
  if (fillIsCustom && !contentFill)
    throw new Error('"contentFill" is required when using a custom fill')

  const fillIsCurrentColor = fill === 'currentColor'
  if (fillIsCurrentColor && contentFill)
    throw new Error('"contentFill" must not be used when using "currentColor" as fill')

  // Data
  const fillValue = getFill({
    fill,
    variant: 'fill',
    withGradient,
  })

  const contentFillValue = getFill({
    fill: contentFill ?? fill,
    variant: 'contentFill',
    withGradient,
  })

  // Styles
  const cssVariables = {
    '--fill': fillValue,
    '--on-fill': contentFillValue,
  }

  const buttonClassName = `button ${className} ${variant} ${size} ${disabled ? 'disabled' : ''} ${
    fillIsCurrentColor ? 'with-current-color' : ''
  }`

  // Props
  const buttonProps = {
    onClick,
    disabled,
    style: cssVariables,
    className: buttonClassName,
  }

  // Render
  return (
    <button type="button" {...buttonProps}>
      {typeof children === 'string' ? (
        <Text variant="label" size={size} fill="currentColor" className="label">
          {children}
        </Text>
      ) : (
        children
      )}

      <style jsx>{buttonStyles}</style>
    </button>
  )
}

export type { ButtonProps }
export { ButtonComponent }
