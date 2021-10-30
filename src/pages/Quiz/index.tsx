import { useEffect, useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import { api } from '../../services/api'

const Quiz = () => {
  useEffect(() => {
    api.get('/').then((response) => console.log(response.data.results))
  }, [])

  const [currentQuestion, setCurrentQuestion] = useState(1)

  return (
    <>
      <QuestionCard currentQuestion={currentQuestion} />
    </>
  )
}

export default Quiz
