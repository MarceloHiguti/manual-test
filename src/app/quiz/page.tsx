import { getQuizData } from "../../services/quiz.service";
import { QuizFormWrapper } from "./QuizForm/QuizFormWrapper";

export default async function Quiz() {
  const quizData = await getQuizData();

  return <QuizFormWrapper quizData={quizData} />;
}
