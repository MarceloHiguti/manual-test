import { IQuizData, QUIZ_INPUT_TYPES } from "../services/quiz.service";

export interface QuizInputOptions {
  display: string;
  value: string;
  isRejection: boolean;
}

export interface QuizInputData {
  question: string;
  type: string;
  options: Array<QuizInputOptions>;
}

export function transformQuizData(inputData: Array<QuizInputData>): Array<IQuizData> {
  return inputData.map(({question, type, options}) => {
    const transformedOptions = options.map(({display, value, isRejection}) => ({
      label: display,
      value,
      shouldDisplayError: isRejection
    }))

    return ({
      question,
      inputType: type,
      options: transformedOptions
    })
  })
}