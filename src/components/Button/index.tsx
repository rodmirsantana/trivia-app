import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  isActive?: string
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, isActive, ...props }: ButtonProps) => (
  <S.Wrapper isActive={isActive} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
