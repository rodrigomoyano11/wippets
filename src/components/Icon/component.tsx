import { CSSProperties, useRef } from 'react'

import { GRADES, OPTICAL_SIZES, SIZES_AS_STRING } from './constants'
import { Grade, IconName, OpticalSize, Size, Variant, Weight } from './types'
import { useFills } from '~/hooks/useFills'
import { Fill } from '~/types/props'
import { getNearestFromValues } from '~/utils/getNearestFromValues'

type IconProps = {
  name: IconName
  variant?: Variant
  size?: Size
  fill?: Fill
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
    variant = 'outlined',
    size = 'medium',
    fill: fillProp = '#000',
    options,
    className = '',
  } = props

  const {
    fill: withFillProp = 'no',
    weight = 400,
    grade: gradeProp = 'medium',
    opticalSize: opticalSizeProp,
  } = options ?? {}

  // Hooks
  const { getFill } = useFills()
  const elementRef = useRef<HTMLSpanElement>(null)

  // Data
  const withFill = withFillProp === 'yes' ? 1 : 0
  const grade = GRADES[gradeProp]
  const fill = getFill({ fill: fillProp })

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
  const spanClassNames = `material-symbols-${variant} ${className}`

  const spanStyles: CSSProperties = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    fontVariationSettings: `"FILL" ${withFill}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${getWidth()}`,
    fontSize: `${getSize()}px`,
    color: fill,
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
