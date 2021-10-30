import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    text-align: center;
    max-width: 760px;
    margin: 2rem auto;
    padding: 2.5rem 1rem;
    border: 1px solid ${theme.colors.gray};
  `}
`

export const Instructions = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.small};
  `}
`
export const AnswerButtonsWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`
