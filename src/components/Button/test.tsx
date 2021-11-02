/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Button />', () => {
  it('should render Button as default', () => {
    renderWithTheme(<Button>Click here</Button>)

    expect(
      screen.getByRole('button', { name: /click here/i })
    ).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Click here
      </Button>
    )

    expect(screen.getByRole('link', { name: /click here/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
