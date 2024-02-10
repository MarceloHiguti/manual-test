import { useCallback } from 'react';

interface UseStepperActionsProps {
  isLastStep: boolean;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  onStepChange?: (activeStep: number) => void;
}

interface UseStepperActionsFunction {
  handleNext: () => void;
  handleBack: () => void;
  handleGoToStep: (step: number) => void;
}

export function useStepperActions({
  isLastStep,
  activeStep,
  setActiveStep,
  onStepChange,
}: UseStepperActionsProps): UseStepperActionsFunction {
  const stepChange = useCallback(
    (newActiveStep: number) => {
      window.scrollTo(0, 0);
      setActiveStep(newActiveStep);

      if (onStepChange) {
        onStepChange(newActiveStep);
      }
    },
    [onStepChange, setActiveStep]
  );

  const handleNext = useCallback(() => {
    const newActiveStep = isLastStep ? activeStep : activeStep + 1;
    stepChange(newActiveStep);
  }, [activeStep, isLastStep, stepChange]);

  const handleBack = useCallback(() => {
    const newActiveStep = activeStep - 1;
    stepChange(newActiveStep);
  }, [activeStep, stepChange]);

  const handleGoToStep = useCallback((step: number) => {
    stepChange(step);
  }, []);

  return { handleNext, handleBack, handleGoToStep };
}
