/* eslint-disable react/display-name */
import { Box, StepLabel, Stepper } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import classNames from 'classnames';
import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { useStepperActions } from './useStepperActions.hook';
import { CoreButton } from '../CoreButton/CoreButton';
import { ContentStepperActionButtonsPlacement, ContentStepperProps, IStepProps } from './ContentStepper.model';
import styles from './ContentStepper.module.scss';
import { getActionButtonsPlacementClasses, shouldDisplayEmptyBox } from './ContentStepper.util';

export interface StepperApi {
  readonly moveToNextStep: () => void;
  readonly moveToPreviousStep: () => void;
  readonly handleGoToStep: (step: number) => void;
}

export const ContentStepper: ForwardRefExoticComponent<
  PropsWithoutRef<ContentStepperProps> & RefAttributes<StepperApi>
> = forwardRef<StepperApi, ContentStepperProps>(
  (
    {
      initialStep = 0,
      steps,
      onStepChange,
      isLoading,
      areAllStepsCompleted,
      isStepAllowed,
      actionButtonsPlacement = ContentStepperActionButtonsPlacement.EDGE,
      classes,
    },
    ref
  ) => {
    const [auxActiveStep, setActiveStep] = useState(initialStep);
    const activeStep = useMemo(
      () => (auxActiveStep > steps.length - 1 ? auxActiveStep - 1 : auxActiveStep),
      [auxActiveStep, steps]
    );

    const totalSteps = useMemo(() => {
      return steps.length;
    }, [steps]);

    const isLastStep = useMemo(() => {
      return activeStep === totalSteps - 1;
    }, [activeStep, totalSteps]);

    const { handleBack, handleNext, handleGoToStep } = useStepperActions({
      activeStep,
      isLastStep,
      setActiveStep,
      onStepChange,
    });

    const onHandleNavigateByStepper = useCallback(
      async (step: number) => {
        if (areAllStepsCompleted && isStepAllowed && (await isStepAllowed(step))) {
          handleGoToStep(step);
        }
      },
      [areAllStepsCompleted, handleGoToStep, isStepAllowed]
    );

    useImperativeHandle(
      ref,
      () => ({
        moveToNextStep: handleNext,
        moveToPreviousStep: handleBack,
        handleGoToStep: handleGoToStep,
      }),
      [handleNext, handleBack, handleGoToStep]
    );

    const {
      content,
      onHandleNext,
      onHandleCancel,
      nextButtonIcon,
      onHandlePrevious,
      titleCancelButton,
      titleNextButton,
      titlePreviousButton,
      isStartIcon = false,
      disableButton = false,
    } = useMemo(() => steps[activeStep], [steps, activeStep]);

    const contentStep = useCallback(
      (step: IStepProps, index: number) => {
        const goTo = () => onHandleNavigateByStepper(index);
        return (
          <Step key={`${step.stepTitle}`} completed={areAllStepsCompleted}>
            <StepButton onClick={goTo}>
              <StepLabel error={step.error}>{step.stepTitle}</StepLabel>
            </StepButton>
          </Step>
        );
      },
      [onHandleNavigateByStepper, areAllStepsCompleted]
    );

    return (
      <>
        {totalSteps > 1 && (
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            className={classNames(styles.stepper, classes?.stepper)}
            nonLinear={areAllStepsCompleted}
          >
            {steps.map((step, index) => contentStep(step, index))}
          </Stepper>
        )}
        {content}
        <Box
          className={classNames(
            styles.contentStepper,
            getActionButtonsPlacementClasses(styles, actionButtonsPlacement),
            classes?.actionsContainer
          )}
        >
          {onHandleCancel ? (
            <CoreButton disabled={isLoading} onClick={onHandleCancel} variant="outlined">
              {titleCancelButton}
            </CoreButton>
          ) : null}
          {shouldDisplayEmptyBox(actionButtonsPlacement) ? <Box className={styles.emptyBox} /> : undefined}
          {activeStep > 0 ? (
            <CoreButton disabled={isLoading} onClick={onHandlePrevious} variant="outlined">
              {titlePreviousButton}
            </CoreButton>
          ) : null}
          {titleNextButton ? (
            <CoreButton
              disabled={disableButton}
              endIcon={!isStartIcon ? nextButtonIcon : undefined}
              loading={isLoading}
              onClick={onHandleNext}
              startIcon={isStartIcon ? nextButtonIcon : undefined}
              variant="contained"
            >
              {titleNextButton}
            </CoreButton>
          ) : null}
        </Box>
      </>
    );
  }
);
