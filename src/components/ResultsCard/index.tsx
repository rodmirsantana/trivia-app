import { useEffect, useState } from 'react'

import Button from '../Button'
import CardHeader from '../CardHeader'
import * as S from './styles'

import { QuestionProps } from '../../pages/Quiz'
import { Results } from './interface'

const ResultsCard = () => {
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<Results[]>([])

  useEffect(() => {
    const questions: QuestionProps[] = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.getItem('@Trivia:questions')!
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const answers = JSON.parse(localStorage.getItem('@Trivia:answers')!)

    const questionResults = questions.map((question, index) => ({
      question: question.question,
      result:
        question.correct_answer === answers[index] ? 'correct' : 'incorrect'
    }))

    setResults(questionResults)

    const totalScore = questions.reduce((score, question, index) => {
      if (question.correct_answer === answers[index]) {
        score++
      }
      return score
    }, 0)

    setScore(totalScore)
  }, [])

  return (
    <S.Container>
      <CardHeader>
        You scored: <br /> {score} / 10
      </CardHeader>
      <S.ResultsWrapper>
        {results &&
          results.map((item, index) =>
            item.result === 'correct' ? (
              <S.Results status="correct" key={index}>
                {' '}
                + {item.question}
              </S.Results>
            ) : (
              <S.Results status="incorrect" key={index}>
                {' '}
                - {item.question}
              </S.Results>
            )
          )}
      </S.ResultsWrapper>
      <Button as="a" href="/" value="Play again?">
        Play again?
      </Button>
    </S.Container>
  )
}

export default ResultsCard
