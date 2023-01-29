import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Home', () => {
  it('should render', () => {
    render(<Home />)

    const homeTitle = screen.getByText('Home')
    expect(homeTitle).toBeTruthy()
  })
})
