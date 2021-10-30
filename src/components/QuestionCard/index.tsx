import { FormEvent, useState } from 'react'
import Button from '../Button'
import CardHeader from '../CardHeader'
import * as S from './styles'

export type QuestionCardProps = {
  currentQuestion: number
}

const QuestionCard = ({ currentQuestion }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  function handleAnswerQuestion(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <S.Container onSubmit={handleAnswerQuestion}>
      <CardHeader>Question Category Name</CardHeader>
      <S.Instructions>Here is the question content</S.Instructions>
      <S.AnswerButtonsWrapper>
        <Button
          onClick={() => {
            setSelectedAnswer('true')
          }}
          isActive={selectedAnswer === 'true'}
          value="True"
        >
          True
        </Button>
        <Button
          onClick={() => {
            setSelectedAnswer('false')
          }}
          isActive={selectedAnswer === 'false'}
          value="False"
        >
          False
        </Button>
      </S.AnswerButtonsWrapper>
      <Button isDisabled={!selectedAnswer} type="submit">
        Next
      </Button>
    </S.Container>
  )
}

export default QuestionCard
