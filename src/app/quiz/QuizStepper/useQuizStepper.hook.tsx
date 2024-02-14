import { useQuizFormContext } from "../QuizForm/quiz.context";
import { useCallback, useMemo, useRef } from "react";
import { IQuizData } from "@/services/quiz.service";
import { StepperApi } from "@/components/ContentStepper/ContentStepper";
import { QuestionFrame } from "../QuizFrame/QuestionFrame";
import { QuizResult } from "../QuizFrame/QuizResult";
import { useRouter } from "next/navigation";

interface IQuizStepperParams {
  quizData: Array<IQuizData>;
}

export function useQuizStepper({ quizData }: IQuizStepperParams) {
  const router = useRouter();
  const stepperRef = useRef<StepperApi>(null!);
  const { quizFormAnswer } = useQuizFormContext();

  const handleGoToMainPage = useCallback(() => {
    router.push("/");
  }, [router]);

  const handlePreviousClick = useCallback(() => {
    stepperRef.current?.moveToPreviousStep();
  }, [stepperRef]);

  const handleNextClick = useCallback(
    (questionIndex: number) => {
      const isFilled = quizFormAnswer[questionIndex]?.value !== undefined;
      return () => {
        !!isFilled && stepperRef.current?.moveToNextStep();
      };
    },
    [stepperRef, quizFormAnswer]
  );

  const steps = useMemo(() => {
    const questionsSteps = quizData.map(
      ({ question, inputType, options }, index) => ({
        content: (
          <QuestionFrame
            question={question}
            inputType={inputType}
            options={options}
            questionIndex={index}
          />
        ),
        stepTitle: `Question ${index + 1}`,
        titleCancelButton: index === 0 ? "cancel" : "previous",
        titleNextButton: "next",
        onHandleCancel: index === 0 ? handleGoToMainPage : handlePreviousClick,
        onHandleNext: handleNextClick(index),
        disableButton: quizFormAnswer[index]?.value === undefined,
      })
    );

    const summary = {
      content: <QuizResult />,
      stepTitle: "Result",
      titleCancelButton: "previous",
      titleNextButton: "finish",
      onHandleCancel: handlePreviousClick,
      onHandleNext: handleGoToMainPage,
    };

    return [...questionsSteps, summary];
  }, [
    quizData,
    handleGoToMainPage,
    handlePreviousClick,
    handleNextClick,
    quizFormAnswer,
  ]);

  return { stepperRef, steps };
}
