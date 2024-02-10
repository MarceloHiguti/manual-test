import { ContentStepper } from "@/components/ContentStepper";
import { StepperApi } from "@/components/ContentStepper/ContentStepper";
import { useMemo, useRef } from "react";
import { QuestionFrame } from "./QuestionFrame";
import style from './QuizStepper.module.scss'

export const QuizStepper = () => {
  const stepperRef = useRef<StepperApi>(null!);

  const titleCancelButton = 'cancel'
  const titleNextButton = 'next'
  const steps = useMemo(
    () =>
      [
        {
          content: <QuestionFrame question='question 01' options={[]} />,
          stepTitle: 'Step 1',
          titleCancelButton: titleCancelButton,
          titleNextButton: titleNextButton,
          // nextButtonIcon: <ArrowForwardIcon />,
          onHandleCancel: () => console.log('cancel'),
          onHandleNext: () => console.log('next'),
        },
        {
          content: <QuestionFrame question='question 01' options={[]} />,
          stepTitle: 'Step 2',
          titleCancelButton: titleCancelButton,
          titleNextButton: titleNextButton,
          // nextButtonIcon: <ArrowForwardIcon />,
          onHandleCancel: () => console.log('cancel'),
          onHandleNext: () => console.log('next'),
        },
        {
          content: <QuestionFrame question='question 01' options={[]} />,
          stepTitle: 'Step 3',
          titleCancelButton: titleCancelButton,
          titleNextButton: titleNextButton,
          // nextButtonIcon: <ArrowForwardIcon />,
          onHandleCancel: () => console.log('cancel'),
          onHandleNext: () => console.log('next'),
        },
      ],
    [
      titleCancelButton,
      titleNextButton,
    ]
  );

  return <ContentStepper
    ref={stepperRef}
    // actionButtonsPlacement={ContentStepperActionButtonsPlacement.RIGHT}
    // classes={contentStepperClasses}
    // isLoading={isLoading}
    steps={steps}
    classes={{actionsContainer: style.stepper__action__container}}
    />
}