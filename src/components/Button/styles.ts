import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme }) => css`
    cursor: pointer;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 12%);

    transition: filter 0.2s;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      filter: brightness(0.9);
    }
  `}
`
