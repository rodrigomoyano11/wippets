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

type OnFills =
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
  fill?: Exclude<Color | Gradient, OnFills | OthersFills>
  onFill?: Color | Gradient
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
    onFill,
    onClick,
    disabled = false,
    className = '',
  } = props

  // Hooks
  const { getFill } = useFills()

  // Exceptions
  const fillIsCustom = fill.startsWith('#') || fill.includes('gradient')
  if (fillIsCustom && !onFill) throw new Error('"onFill" is required when using a custom fill')

  const fillIsCurrentColor = fill === 'currentColor'
  if (fillIsCurrentColor && onFill)
    throw new Error('"onFill" must not be used when using "currentColor" as fill')

  // Data
  const fillValue = getFill({
    fill,
    variant: 'fill',
    withGradient,
  })

  const onFillValue = getFill({
    fill: onFill ?? fill,
    variant: 'onFill',
    withGradient,
  })

  // Styles
  const cssVariables = {
    '--fill': fillValue,
    '--on-fill': onFillValue,
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
        <Text variant="label" size={size} color="currentColor" className="label">
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
