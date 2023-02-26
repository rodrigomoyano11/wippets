'use client'

import { PropsWithChildren, useId } from 'react'

import { Heading, HeadingProps } from './components/Heading'
import { textStyles } from './styles'
import { Tag, Variant, VariantWithSize } from './types'
import { useFills } from '~/hooks/useFills'
import { Color, Size } from '~/types/props'

type TextProps = {
  variant?: Variant
  size?: Size
  color?: Color
  tag?: Tag
  withSpacing?: boolean
  className?: string
}

const TextComponent = (props: PropsWithChildren<TextProps>) => {
  // Props
  const {
    children,
    variant = 'body',
    size = 'medium',
    color: colorProp = 'onBackground',
    tag,
    withSpacing = false,
    className = '',
  } = props

  // Hooks
  const { getFill } = useFills()

  const id = useId()

  // Data
  const selectedType: VariantWithSize = `${variant}-${size}`

  const color = getFill({ fill: colorProp })

  // Styles
  const cssVariables = { '--color': color }

  const containerClassName = `container ${className} ${withSpacing ? 'with-spacing' : ''}`

  // Render

  const headingProps = {
    id,
    tag: tag as HeadingProps['tag'],
    variant: selectedType,
    className: selectedType,
  }

  const headingComponent = <Heading {...headingProps}>{children}</Heading>
  const bodyComponent = <p className={selectedType}>{children}</p>
  const labelComponent = <span className={selectedType}>{children}</span>

  const variants: Record<Variant, JSX.Element> = {
    display: headingComponent,
    headline: headingComponent,
    title: headingComponent,
    body: bodyComponent,
    label: labelComponent,
  }

  const tags: Record<Tag, JSX.Element> = {
    h1: headingComponent,
    h2: headingComponent,
    h3: headingComponent,
    h4: headingComponent,
    h5: headingComponent,
    h6: headingComponent,
    p: bodyComponent,
    span: labelComponent,
  }

  return (
    <div style={cssVariables} className={containerClassName}>
      {tag ? tags[tag] : variants[variant]}

      <style jsx>{textStyles}</style>
    </div>
  )
}

export type { TextProps }
export { TextComponent }
