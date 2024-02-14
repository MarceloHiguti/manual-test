import { Dispatch, SetStateAction } from "react";
import { createContext } from "../../../utils/createContext.hook";

interface QuizFormAnswerObject {
  hasError: boolean;
  value: string;
}

interface QuizFormState {
  quizFormAnswer: Record<string, QuizFormAnswerObject>;
  setQuizFormAnswer: Dispatch<
    SetStateAction<Record<string, QuizFormAnswerObject>>
  >;
}

export const [QuizFormProvider, useQuizFormContext] =
  createContext<QuizFormState>({
    name: "QuizFormContext",
  });
