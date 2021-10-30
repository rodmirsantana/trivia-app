import { useState } from 'react'
import Button from '../Button'
import CardHeader from '../CardHeader'
import * as S from './styles'

export type CardProps = {
  cardType: 'HomeCard' | 'QuestionCard' | 'ResultsCard'
}

const Card = ({ cardType }: CardProps) => {
  return (
    <S.Container>
      {cardType === 'HomeCard' && (
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
      )}
      {cardType === 'ResultsCard' && (
        <>
          <CardHeader>
            You scored: <br /> 3 / 10
          </CardHeader>
          <S.Instructions>
            + Unturned originally started as a Roblox game
          </S.Instructions>
          <S.Instructions>
            - Lorem ipsum dolor sit amet omnis paribus
          </S.Instructions>
          <S.Instructions>
            - Lorem ipsum dolor sit amet omnis paribus
          </S.Instructions>
          <S.Instructions>
            + Unturned originally started as a Roblox game
          </S.Instructions>
          <Button value="Play again?">Play again?</Button>
        </>
      )}
    </S.Container>
  )
}

export default Card
