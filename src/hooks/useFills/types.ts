import { Fill } from '~/types/props'

type GetFillParams = {
  fill: Fill
  variant?: 'fill' | 'contentFill' | 'hoverFill'
  withGradient?: boolean
}

type GetColorParams = Omit<GetFillParams, 'withGradient'>

type GetGradientParams = GetColorParams

export type { GetFillParams, GetColorParams, GetGradientParams }
