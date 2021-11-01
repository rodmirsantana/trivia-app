import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.form`
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

    h1 {
      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xlarge}
      `}
    }
  `}
`

const Question = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.small};
  `}
`
export default Question as React.FC

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    button {
      :first-of-type {
        margin-right: ${theme.spacings.small};
      }
    }
  `}
`
