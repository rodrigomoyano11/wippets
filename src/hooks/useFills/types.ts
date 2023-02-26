import { Fill } from '~/types/props'

type GetFillArgs = {
  fill: Fill
  variant?: 'fill' | 'contentFill' | 'hoverFill'
  withGradient?: boolean
}

type GetColorArgs = Omit<GetFillArgs, 'withGradient'>

type GetGradientArgs = GetColorArgs

export type { GetFillArgs, GetColorArgs, GetGradientArgs }
