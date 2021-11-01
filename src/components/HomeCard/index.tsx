import Button from '../Button'
import CardHeader from '../CardHeader'
import * as S from './styles'

const HomeCard = () => {
  return (
    <S.Container>
      <>
        <CardHeader>Welcome to the Trivia Challenge!</CardHeader>
        <S.Instructions>
          You will be presented with 10 True or False questions.
        </S.Instructions>
        <S.Instructions>Can you score 100%?</S.Instructions>
        <Button as="a" href="/quiz" value="Begin">
          Begin
        </Button>
      </>
    </S.Container>
  )
}

export default HomeCard
