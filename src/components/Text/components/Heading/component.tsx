/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useEffect, useRef } from 'react'

import { usePathname } from 'next/navigation'

import { HeadingTag } from './types'
import { VariantWithSize } from '../../types'
import { useOutlineContext } from '~/contexts/Outline'
import { Outline, OutlineItem } from '~/contexts/Outline/types'

type HeadingProps = {
  id: string
  variant: VariantWithSize
  tag?: HeadingTag
  className?: string
}

const HeadingComponent = (props: PropsWithChildren<HeadingProps>) => {
  // Props
  const { id, children, variant, tag, className = '' } = props

  // Hooks
  const { outline, setOutline } = useOutlineContext()

  const pathname = usePathname()

  const ref = useRef<HTMLHeadingElement>(null)

  // Methods
  const calculateLevel = (prevItem: OutlineItem, currentItem: OutlineItem) => {
    const variants = [
      'display-large',
      'display-medium',
      'display-small',
      'headline-large',
      'headline-medium',
      'headline-small',
      'title-large',
      'title-medium',
      'title-small',
    ]

    const prevLevel = prevItem.level
    const prevVariant = variants.indexOf(prevItem.variant)
    const currentVariant = variants.indexOf(currentItem.variant)

    if (prevLevel === 1) return 2
    if (currentVariant === prevVariant) return prevLevel

    return currentVariant > prevVariant ? prevLevel + 1 : prevLevel - 1
  }

  const getNewOutline = (prevOutline: Outline, currentPath: string) => {
    const items = prevOutline[currentPath]
    const title = children?.toString() ?? ''

    if (!items) {
      const newItem = { id, title, variant, level: 1 }

      return { ...prevOutline, [currentPath]: [newItem] }
    }

    const hasSameId = items.some((item) => item.id === id)
    if (hasSameId) {
      const newItems = items.map((item) => (item.id === id ? { ...item, title, variant } : item))

      return { ...prevOutline, [currentPath]: newItems }
    }

    const prevItem = items[items.length - 1]
    const level = calculateLevel(prevItem, { id, title, variant, level: prevItem.level })

    const newItem = { id, title, variant, level: level > 6 ? 6 : level }
    return { ...prevOutline, [currentPath]: [...items, newItem] }
  }

  // Effects
  useEffect(() => {
    if (!pathname) return
    setOutline((prevState) => getNewOutline(prevState, pathname))
  }, [pathname, variant])

  // Render
  const baseProps = {
    ref,
    className,
  }

  const headings: Record<HeadingTag, JSX.Element> = {
    h1: <h1 {...baseProps}>{children}</h1>,
    h2: <h2 {...baseProps}>{children}</h2>,
    h3: <h3 {...baseProps}>{children}</h3>,
    h4: <h4 {...baseProps}>{children}</h4>,
    h5: <h5 {...baseProps}>{children}</h5>,
    h6: <h6 {...baseProps}>{children}</h6>,
  }

  const foundHeading = outline[pathname ?? '']?.find((item) => item.id === id)
  if (!foundHeading) return null

  return headings[tag ?? (`h${foundHeading.level}` as HeadingTag)]
}

export type { HeadingProps }
export { HeadingComponent }
