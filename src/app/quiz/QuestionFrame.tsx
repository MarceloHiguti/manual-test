import { CoreDropdown } from "@/components/CoreDropdown/CoreDropdown"
import { CoreTypography } from "@/components/CoreTypography/CoreTypography"
import { IQuizOptionObject } from "@/services/quiz.service";
import { FC } from "react";
import style from "./QuestionFrame.module.scss";

interface IQuestionFrameProps {
  question: string;
  options: Array<IQuizOptionObject>
}

export const QuestionFrame: FC<IQuestionFrameProps> = ({question, options}) => {
  return (
    <div key={question} className={style.question__container}>
      <div key={question} className={style.question__frame}>
        <div key={question} className={style.question__frame__title}>
          <CoreTypography>{question}</CoreTypography>
        </div>
          <div key={question} className={style.question__frame__input}>
          <CoreDropdown options={options} />
        </div>
      </div>
    </div>
  )
}