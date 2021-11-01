import React, { FormEvent, Suspense, useState } from 'react'

import Button from '../Button'
const CardHeader = React.lazy(() => import('../CardHeader'))
const Question = React.lazy(() => import('./styles'))

import { Container, ButtonsWrapper } from './styles'
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
  const [isButtonActive, setIsButtonActive] = useState('false')

  return (
    <Container onSubmit={handleAnswerQuestion}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CardHeader>{question.category}</CardHeader>
        <Question>{question.question}</Question>
      </Suspense>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setIsButtonActive('true')
            handleSelectedAnswer('True')
            setIsButtonActive('false')
          }}
          isActive={isButtonActive}
          type="submit"
          value="True"
        >
          True
        </Button>
        <Button
          onClick={() => {
            setIsButtonActive('true')
            handleSelectedAnswer('False')
            setIsButtonActive('false')
          }}
          isActive={isButtonActive}
          value="False"
        >
          False
        </Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default QuestionCard
