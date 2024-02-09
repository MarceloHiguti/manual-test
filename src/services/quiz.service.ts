import { QuizInputData, QuizInputOptions, transformQuizData } from "../utils/quiz.util";

interface IQuizInputTypes {
  ChoiceType: string;
  TextType: string;
}

export interface IQuizOptionObject {
  label: string;
  value: string;
  shouldDisplayError: boolean;
}

export const QUIZ_INPUT_TYPES: IQuizInputTypes = {
  ChoiceType: 'ChoiceType',
  TextType: 'Text',
}

export interface IQuizData {
  question: string;
  inputType: string;
  options: Array<IQuizOptionObject>
}

interface IQuizJsonResponse {
  questions: Array<QuizInputData> 
}

export async function getQuizData(): Promise<Array<IQuizData>> {
  const fetchQuizData = await fetch('https://manual-case-study.herokuapp.com/questionnaires/972423.json')
  const {questions: inputData}:IQuizJsonResponse = await fetchQuizData.json()
  return transformQuizData(inputData)
}