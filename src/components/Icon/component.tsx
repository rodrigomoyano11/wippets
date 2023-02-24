import { CSSProperties, useRef } from 'react'

import { GRADES, OPTICAL_SIZES, SIZES_AS_STRING } from './constants'
import { Grade, IconName, OpticalSize, Size, Weight } from './types'
import { useColors } from '~/hooks/useColors'
import { Color } from '~/types/props'
import { getNearestFromValues } from '~/utils/getNearestFromValues'

type IconProps = {
  name: IconName
  type?: 'outlined' | 'rounded' | 'sharp'
  size?: Size
  color?: Color
  options?: {
    fill?: 'yes' | 'no'
    weight?: Weight
    grade?: Grade
    opticalSize?: OpticalSize
  }
  className?: string
}

const IconComponent = (props: IconProps) => {
  // Props
  const {
    name,
    type = 'outlined',
    size = 'medium',
    color = '#000',
    options,
    className = '',
  } = props

  const {
    fill: fillProp = 'no',
    weight = 400,
    grade: gradeProp = 'medium',
    opticalSize: opticalSizeProp,
  } = options ?? {}

  // Hooks
  const { getColorByName } = useColors()
  const elementRef = useRef<HTMLSpanElement>(null)

  // Data
  const fill = fillProp === 'yes' ? 1 : 0
  const grade = GRADES[gradeProp]

  // Methods
  const getWidth = () => {
    if (opticalSizeProp) return opticalSizeProp
    if (!elementRef.current) return 48

    const { width } = elementRef.current.getBoundingClientRect()

    const nearestWidth = getNearestFromValues(OPTICAL_SIZES, width)

    return nearestWidth
  }

  const getSize = () => {
    if (typeof size === 'number') return size

    return SIZES_AS_STRING[size]
  }

  // Styles
  const spanClassNames = `material-symbols-${type} ${className}`
  const spanStyles: CSSProperties = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${getWidth()}`,
    fontSize: `${getSize()}px`,
    color: getColorByName(color),
  }

  // Render
  return (
    <span ref={elementRef} className={spanClassNames} style={spanStyles}>
      {name}
    </span>
  )
}

export type { IconProps }
export { IconComponent }
