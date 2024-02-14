import { IQuizData } from "../services/quiz.service";

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

export const AMAZON_IMAGES_DOMAIN = "https://s3-eu-west-1.amazonaws.com";

export const QUIZ_MESSAGES = {
  Error:
    "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.",
  Success:
    "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!",
};

export function checkIfAmazonImagesUrl(value: string) {
  const regex = /src=\"([^\"]+)\"/;
  const matchUrl = value.match(regex);
  const imageUrl = matchUrl ? matchUrl[1] : null;

  return imageUrl ?? value;
}

export function transformQuizData(
  inputData: Array<QuizInputData>
): Array<IQuizData> {
  return inputData.map(({ question, type, options }) => {
    const transformedOptions = options.map(
      ({ display, value, isRejection }) => ({
        label: checkIfAmazonImagesUrl(display),
        value,
        shouldDisplayError: isRejection,
      })
    );

    return {
      question,
      inputType: type,
      options: transformedOptions,
    };
  });
}
