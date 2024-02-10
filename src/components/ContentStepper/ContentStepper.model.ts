import { ReactNode } from 'react';

export enum ContentStepperActionButtonsPlacement {
  EDGE = 'EDGE',
  CENTER = 'CENTER',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}
export interface IStepProps {
  content: ReactNode;
  stepTitle: string;
  onHandleNext?: () => void | Promise<void>;
  onHandlePrevious?: () => void;
  onHandleCancel?: () => void;
  titleCancelButton?: string;
  titlePreviousButton?: string;
  titleNextButton?: string;
  nextButtonIcon?: ReactNode;
  previousButtonIcon?: ReactNode;
  isStartIcon?: boolean;
  disableButton?: boolean;
  error?: boolean;
}

export type ContentStepperClasses = Partial<Record<'stepper' | 'actionsContainer', string>>;
export interface ContentStepperProps {
  steps: IStepProps[];
  initialStep?: number;
  onStepChange?: (activeStep: number) => void;
  isLoading?: boolean;
  areAllStepsCompleted?: boolean;
  isStepAllowed?: (step: number) => Promise<boolean>;
  actionButtonsPlacement?: ContentStepperActionButtonsPlacement;
  classes?: ContentStepperClasses;
}
