'use client'

import { Button } from '@mui/material'
import style from './quiz.module.css'
import { CoreDropdown } from '@/components/CoreDropdown/CoreDropdown'
import { CoreText } from '@/components/CoreText/CoreText'
import { IQuizData } from '../../services/quiz.service'
import { QuizFormProvider } from './quiz.context'
import { FC, useState } from 'react'
import CoreStepper from '@/components/CoreStepper/CoreStepper'

interface QuizFormWrapperpROPS {
  quizData: Array<IQuizData>
}

export const QuizFormWrapper: FC<QuizFormWrapperpROPS> = ({quizData}) => {
  const [quizFormAnswer, setQuizFormAnswer] = useState({});

  return (
    <QuizFormProvider value={{quizFormAnswer, setQuizFormAnswer}}>
      <div className={style.quiz__wrapper}>
        <div className={style.quiz__stepper}>
          <CoreStepper />
        </div>
        <div className={style.quiz__section__form}>
          {quizData?.map(({question, inputType, options}) => (
          <div key={question}>
          <CoreText>{question}</CoreText>
          <CoreDropdown options={options} />
          </div>
          ))}
        </div>
        <div className={style.quiz__footer}>
          <Button variant="contained">back</Button>
          <Button variant="contained">next</Button>
        </div>
      </div>
    </QuizFormProvider>
  )
}