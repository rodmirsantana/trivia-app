import React, { FormEvent } from 'react'
import { ClipLoader } from 'react-spinners'

import Button from '../Button'
import CardHeader from '../CardHeader'

import * as S from './styles'
import theme from '../../styles/theme'
import { Question } from './interface'

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
  return (
    <S.Container data-testid="question-form" onSubmit={handleAnswerQuestion}>
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
