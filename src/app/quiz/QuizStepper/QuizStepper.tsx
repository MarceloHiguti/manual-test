import { ContentStepper } from "@/components/ContentStepper/ContentStepper";
import { FC } from "react";
import style from "./QuizStepper.module.scss";
import { IQuizData } from "@/services/quiz.service";
import { useQuizStepper } from "./useQuizStepper.hook";

interface IQuizStepper {
  quizData: Array<IQuizData>;
}

export const QuizStepper: FC<IQuizStepper> = ({ quizData }) => {
  const { stepperRef, steps } = useQuizStepper({ quizData });

  return (
    <ContentStepper
      ref={stepperRef}
      steps={steps}
      classes={{ actionsContainer: style.stepper__action__container }}
    />
  );
};
