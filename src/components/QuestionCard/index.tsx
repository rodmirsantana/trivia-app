import React, { FormEvent, useState } from 'react'
import { ClipLoader } from 'react-spinners'

import Button from '../Button'
import CardHeader from '../CardHeader'

import * as S from './styles'
import theme from '../../styles/theme'
interface Question {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type QuestionCardProps = {
  isLoading: boolean
  handleSelectedAnswer: (answer: string) => void
  handleAnswerQuestion: (event: FormEvent) => void
  question: Question
}

const QuestionCard = ({
  isLoading,
  handleSelectedAnswer,
  handleAnswerQuestion,
  question
}: QuestionCardProps) => {
  const [isButtonActive, setIsButtonActive] = useState('false')

  return (
    <S.Container onSubmit={handleAnswerQuestion}>
      {isLoading ? (
        <ClipLoader
          color={theme.colors.secondary}
          loading={isLoading}
          size={35}
        />
      ) : (
        <>
          <CardHeader>{question.category}</CardHeader>
          <S.Question>{question.question}</S.Question>
        </>
      )}
      <S.ButtonsWrapper>
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
      </S.ButtonsWrapper>
    </S.Container>
  )
}

export default QuestionCard
