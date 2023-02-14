import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import RootPage from './page'

describe('Home', () => {
  it('should render', () => {
    render(<RootPage />)

    const homeTitle = screen.getByText('Home')
    expect(homeTitle).toBeTruthy()
  })
})
