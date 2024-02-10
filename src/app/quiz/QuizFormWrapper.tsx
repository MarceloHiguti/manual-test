'use client'

import { IQuizData } from '../../services/quiz.service'
import { QuizFormProvider } from './quiz.context'
import { FC, useState } from 'react'
import { QuizStepper } from './QuizStepper'

interface QuizFormWrapperpROPS {
  quizData: Array<IQuizData>
}

export const QuizFormWrapper: FC<QuizFormWrapperpROPS> = ({quizData}) => {
  const [quizFormAnswer, setQuizFormAnswer] = useState({});

  return (
    <QuizFormProvider value={{quizFormAnswer, setQuizFormAnswer}}>
      <QuizStepper />
    </QuizFormProvider>
  )
}