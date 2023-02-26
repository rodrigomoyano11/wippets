'use client'

import { PropsWithChildren } from 'react'

import { GlobalStylesProvider } from '~/app/components/GlobalStylesProvider'
import { StyledJsxRegistry } from '~/app/components/StyledJsxRegistry'
import { ThemeProvider } from '~/components/ThemeProvider'
import { MainProvider } from '~/contexts/Main'
import { OutlineProvider } from '~/contexts/Outline'

type Props = PropsWithChildren

const ProvidersComponent = ({ children }: Props) => (
  <StyledJsxRegistry>
    <GlobalStylesProvider>
      <MainProvider>
        <OutlineProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </OutlineProvider>
      </MainProvider>
    </GlobalStylesProvider>
  </StyledJsxRegistry>
)

export { ProvidersComponent }
