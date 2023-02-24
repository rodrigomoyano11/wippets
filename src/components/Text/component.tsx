'use client'

import { PropsWithChildren, useId } from 'react'

import { Heading, HeadingProps } from './components/Heading'
import { textStyles } from './styles'
import { Tag, Variant, VariantWithSize } from './types'
import { useColors } from '~/hooks/useColors'
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
    color = 'onBackground',
    tag,
    withSpacing = false,
    className = '',
  } = props

  // Hooks
  const { getColorByName } = useColors()

  const id = useId()

  // Styles
  const cssVariables = { '--color': getColorByName(color) }

  const containerClassName = `container ${className} ${withSpacing ? 'with-spacing' : ''}`

  // Render
  const selectedType: VariantWithSize = `${variant}-${size}`

  const headingProps = {
    id,
    tag: tag as HeadingProps['tag'],
    variant: selectedType,
    className: selectedType,
  }

  const headingComponent = <Heading {...headingProps}>{children}</Heading>

  const variants: Record<Variant, JSX.Element> = {
    display: headingComponent,
    headline: headingComponent,
    title: headingComponent,
    body: <p className={selectedType}>{children}</p>,
    label: <span className={selectedType}>{children}</span>,
  }

  const tags: Record<Tag, JSX.Element> = {
    h1: headingComponent,
    h2: headingComponent,
    h3: headingComponent,
    h4: headingComponent,
    h5: headingComponent,
    h6: headingComponent,
    p: <p className={selectedType}>{children}</p>,
    span: <span className={selectedType}>{children}</span>,
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
