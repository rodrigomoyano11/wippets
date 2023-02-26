'use client'

import { PropsWithChildren } from 'react'

import { StyledJsxRegistry } from '~/app/components/StyledJsxRegistry'
import { ThemeProvider } from '~/components/ThemeProvider'
import { MainProvider } from '~/contexts/Main'
import { OutlineProvider } from '~/contexts/Outline'

const ProvidersComponent = ({ children }: PropsWithChildren) => (
  <StyledJsxRegistry>
    <MainProvider>
      <OutlineProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </OutlineProvider>
    </MainProvider>
  </StyledJsxRegistry>
)

export { ProvidersComponent }
