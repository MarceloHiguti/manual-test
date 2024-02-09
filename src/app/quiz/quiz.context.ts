import { Dispatch, SetStateAction } from "react";
import { createContext } from "../../utils/createContext.hook";

interface QuizFormState {
  quizFormAnswer: Record<string, unknown>
  setQuizFormAnswer: Dispatch<SetStateAction<Record<string, unknown>>>;
}

export const [QuizFormProvider, useQuizFormContext] = createContext<QuizFormState>({
  name: 'QuizFormContext',
});
