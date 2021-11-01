import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 760px;
    margin: 2rem auto;
    padding: 2.5rem 1rem;
    border: 1px solid ${theme.colors.gray};

    ${media.lessThan('medium')`
      width: 95%;
    `}
  `}
`

export const ResultsWrapper = styled.div`
  padding-bottom: 64px;
`

type ResultsProps = {
  status: 'correct' | 'incorrect'
}

export const Results = styled.div<ResultsProps>`
  ${({ theme, status }) => css`
    text-align: center;
    padding: ${theme.spacings.xsmall};
    color: ${status === 'correct' ? theme.colors.secondary : theme.colors.red};

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall}
    `}
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    button {
      :first-of-type {
        margin-right: ${theme.spacings.small};
      }
    }
  `}
`
