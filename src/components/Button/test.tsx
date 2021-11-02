/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('', () => {
  it('should render the button as default', () => {
    renderWithTheme(<Button>Click here</Button>)

    expect(
      screen.getByRole('button', { name: /click here/i })
    ).toBeInTheDocument()
  })
})
