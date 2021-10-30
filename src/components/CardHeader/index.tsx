import * as S from './styles'

export type CardHeaderProps = {
  children: React.ReactNode
}

const CardHeader = ({ children }: CardHeaderProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default CardHeader
