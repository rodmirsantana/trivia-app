import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme }) => css`
    text-align: center;
    max-width: 760px;
    margin: 2rem auto;
    padding: 2.5rem 1rem;
    border: 1px solid ${theme.colors.gray};
    ${media.lessThan('medium')`
      width: 95%;
      margin-top: 25vh;
    `}
  `}
`

export const Instructions = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.small};
  `}
`
