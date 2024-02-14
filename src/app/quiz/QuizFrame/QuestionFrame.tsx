import { CoreDropdown } from "@/components/CoreDropdown/CoreDropdown";
import { CoreTypography } from "@/components/CoreTypography/CoreTypography";
import { IQuizOptionObject, QUIZ_INPUT_TYPES } from "@/services/quiz.service";
import { FC, useCallback, useMemo, useState } from "react";
import style from "./QuestionFrame.module.scss";
import { Alert } from "@mui/material";
import { useQuizFormContext } from "../QuizForm/quiz.context";
import { QUIZ_MESSAGES } from "@/utils/quiz.util";

interface IQuestionFrameProps {
  question: string;
  options: Array<IQuizOptionObject>;
  inputType: string;
  questionIndex: number;
}

export const QuestionFrame: FC<IQuestionFrameProps> = ({
  question,
  options,
  inputType,
  questionIndex,
}) => {
  const { quizFormAnswer, setQuizFormAnswer } = useQuizFormContext();

  const handleDropdownChange = useCallback(
    ({ shouldDisplayError, value }: IQuizOptionObject) => {
      setQuizFormAnswer({
        ...quizFormAnswer,
        [questionIndex]: {
          hasError: shouldDisplayError,
          value,
        },
      });
    },
    [setQuizFormAnswer, quizFormAnswer, questionIndex]
  );

  const { dropdownValue, hasError } = useMemo(() => {
    const formAnswerFound = quizFormAnswer[questionIndex];
    const dropdownValue = formAnswerFound?.value ?? "";
    const hasError = formAnswerFound?.hasError ?? false;

    return { dropdownValue, hasError };
  }, [quizFormAnswer, questionIndex]);

  return (
    <div key={question} className={style.question__container}>
      <div key={question} className={style.question__frame}>
        <div key={question} className={style.question__frame__title}>
          <CoreTypography>{question}</CoreTypography>
        </div>
        <div key={question} className={style.question__frame__input}>
          {inputType === QUIZ_INPUT_TYPES.ChoiceType && (
            <CoreDropdown
              value={dropdownValue}
              options={options}
              callbackOnChange={handleDropdownChange}
            />
          )}
        </div>
      </div>
      {hasError && <Alert severity="warning">{QUIZ_MESSAGES.Error}</Alert>}
    </div>
  );
};
