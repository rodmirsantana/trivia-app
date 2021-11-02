import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
