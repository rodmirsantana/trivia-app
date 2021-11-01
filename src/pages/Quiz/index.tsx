import { FormEvent, useCallback, useEffect, useState } from 'react'
import he from 'he'
import QuestionCard from '../../components/QuestionCard'
import { api } from '../../services/api'
import { useHistory } from 'react-router'

export type QuestionProps = {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const Quiz = () => {
  const history = useHistory()
  const [questionsList, setQuestionsList] = useState<QuestionProps[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>({
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: []
  })
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  useEffect(() => {
    api.get('/').then((response) => {
      const questions = response.data.results

      const parsedQuestions = questions.map((item: QuestionProps) => ({
        category: item.category,
        question: he.decode(item.question),
        correct_answer: item.correct_answer,
        incorrect_answers: item.incorrect_answers
      }))

      localStorage.clear()
      localStorage.setItem('@Trivia:questions', JSON.stringify(parsedQuestions))
      setQuestionsList(parsedQuestions)
      setCurrentQuestion({ ...parsedQuestions[0] })
    })
  }, [])

  const handleAnswerQuestion = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      setCurrentQuestionIndex((prevState) => prevState + 1)

      if (currentQuestionIndex === questionsList.length - 1) {
        history.push('/results')
      }

      setCurrentQuestion({ ...questionsList[currentQuestionIndex] })
    },
    [questionsList, currentQuestionIndex]
  )

  const handleSelectedAnswer = useCallback(
    (answer: string) => {
      setAnswers([...answers, answer])

      const savedAnswers = localStorage.getItem('@Trivia:answers')

      if (savedAnswers) {
        const parsedSavedAnswers = JSON.parse(savedAnswers)
        localStorage.setItem(
          '@Trivia:answers',
          JSON.stringify([...parsedSavedAnswers, answer])
        )
        return [...parsedSavedAnswers, answer]
      }

      localStorage.setItem(
        '@Trivia:answers',
        JSON.stringify([...answers, answer])
      )

      return answers
    },
    [answers]
  )
  return (
    <QuestionCard
      handleSelectedAnswer={handleSelectedAnswer}
      handleAnswerQuestion={handleAnswerQuestion}
      question={{ ...questionsList[currentQuestionIndex] }}
    />
  )
}

export default Quiz
