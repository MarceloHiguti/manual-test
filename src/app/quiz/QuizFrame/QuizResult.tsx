import { FC, useMemo, useState } from "react";
import { Alert } from "@mui/material";
import { QUIZ_MESSAGES } from "@/utils/quiz.util";
import style from "./QuestionFrame.module.scss";
import { useQuizFormContext } from "../QuizForm/quiz.context";

export const QuizResult: FC = () => {
  const { quizFormAnswer } = useQuizFormContext();
  const hasAnyError = useMemo(
    () => Object.values(quizFormAnswer).some(({ hasError }) => hasError),
    [quizFormAnswer]
  );

  const severity = useMemo(
    () => (hasAnyError ? "warning" : "success"),
    [hasAnyError]
  );
  const message = useMemo(
    () => (hasAnyError ? QUIZ_MESSAGES.Error : QUIZ_MESSAGES.Success),
    [hasAnyError]
  );
  const urlRegex = /(?:^|\s)(www\.[^\s]+)/g;

  const renderedText = message.split(urlRegex).map((splittedString, index) => {
    if (urlRegex.test(splittedString)) {
      return (
        <a
          href={"https://www.manual.co/"}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {` ${splittedString}`}
        </a>
      );
    } else {
      return splittedString;
    }
  });

  return (
    <div className={style.question__container}>
      <Alert severity={severity}>{renderedText}</Alert>
    </div>
  );
};
