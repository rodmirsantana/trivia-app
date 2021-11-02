/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */

import { fireEvent, screen } from '@testing-library/react'

import QuestionCard from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  isLoading: false,
  question: {
    category: 'History',
    question: 'The Second World War ended in 1945',
    correct_answer: 'true',
    incorrect_answers: ['false']
  },
  handleSelectedAnswer: jest.fn((answer: string) => {}),
  handleAnswerQuestion: jest.fn(() => {})
}

describe('<QuestionCard />', () => {
  it('should render the question category, content and answer buttons', () => {
    renderWithTheme(<QuestionCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.question.category })
    ).toBeInTheDocument()

    expect(screen.getByText(props.question.question)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'True' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'False' })).toBeInTheDocument()
  })

  it('should call handleSelectedAnswer method when one of the answer buttons is clicked', () => {
    const handleSelectedAnswer = jest.fn()
    handleSelectedAnswer.mockImplementation(() => {})

    const handleAnswerQuestion = jest.fn()
    handleAnswerQuestion.mockImplementation((event) => {
      event.preventDefault()
    })

    renderWithTheme(
      <QuestionCard
        {...props}
        handleAnswerQuestion={handleAnswerQuestion}
        handleSelectedAnswer={handleSelectedAnswer}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'True' }))
    fireEvent.click(screen.getByRole('button', { name: 'False' }))

    expect(handleSelectedAnswer).toHaveBeenCalledWith('True')
    expect(handleSelectedAnswer).toHaveBeenCalledWith('False')
  })

  it('should call handleAnswerQuestion method when the form is submitted', () => {
    const handleAnswerQuestion = jest.fn()
    handleAnswerQuestion.mockImplementation((event) => {
      event.preventDefault()
    })

    renderWithTheme(
      <QuestionCard
        test-id="question-form"
        {...props}
        handleAnswerQuestion={handleAnswerQuestion}
      />
    )
    fireEvent.submit(screen.getByTestId('question-form'))

    expect(handleAnswerQuestion).toBeCalled()
  })
})
