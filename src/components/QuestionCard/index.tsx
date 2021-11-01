import { FormEvent } from 'react'
import Button from '../Button'
import CardHeader from '../CardHeader'
import * as S from './styles'
interface Question {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type QuestionCardProps = {
  handleSelectedAnswer: (answer: string) => void
  handleAnswerQuestion: (event: FormEvent) => void
  question: Question
}

const QuestionCard = ({
  handleSelectedAnswer,
  handleAnswerQuestion,
  question
}: QuestionCardProps) => {
  return (
    <S.Container onSubmit={handleAnswerQuestion}>
      <CardHeader>{question.category}</CardHeader>
      <S.Question>{question.question}</S.Question>
      <S.ButtonsWrapper>
        <Button
          onClick={() => {
            handleSelectedAnswer('True')
          }}
          type="submit"
          value="True"
        >
          True
        </Button>
        <Button
          onClick={() => {
            handleSelectedAnswer('False')
          }}
          value="False"
        >
          False
        </Button>
      </S.ButtonsWrapper>
    </S.Container>
  )
}

export default QuestionCard
