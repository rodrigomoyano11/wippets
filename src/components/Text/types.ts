import { Size } from '~/types/props'

type Variant = 'display' | 'headline' | 'title' | 'body' | 'label'

type VariantWithSize = `${Variant}-${Size}`

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type { Variant, VariantWithSize, Tag }
