import { Tag } from '../../types'

type HeadingTag = Exclude<Tag, 'p' | 'span'>

export type { HeadingTag }
