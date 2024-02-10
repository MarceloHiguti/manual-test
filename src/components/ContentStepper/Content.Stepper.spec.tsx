import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';

import { StepperApi } from '../Stepper/Stepper';
import { ContentStepper, IStepProps } from './ContentStepper';

const Stepper = () => {
  const stepperRef = useRef<StepperApi>(null);

  const goToSecondStep = () => {
    stepperRef.current?.moveToNextStep();
  };

  const goBackFirstStep = () => {
    stepperRef.current?.moveToPreviousStep();
  };

  const steps: IStepProps[] = [
    {
      content: <>Content 1</>,
      onHandleCancel: jest.fn(),
      onHandlePrevious: jest.fn(),
      onHandleNext: goToSecondStep,
      titleNextButton: 'button.next',
      stepTitle: 'Step 1',
    },
    {
      content: <>Content 2</>,
      onHandleCancel: jest.fn(),
      onHandlePrevious: goBackFirstStep,
      titlePreviousButton: 'button.previous',
      stepTitle: 'Step 2',
    },
  ];

  return <ContentStepper ref={stepperRef} steps={steps} />;
};

describe('Stepper', () => {
  test('should render the first step', () => {
    render(<Stepper />);

    const firstStep = screen.getByText(/Step 1/);

    const content = screen.getByText(/Content 1/);

    expect(firstStep).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test('should render the first step and go to the sencond step', () => {
    render(<Stepper />);

    const firstStep = screen.getByText(/Step 1/);

    expect(firstStep).toBeInTheDocument();

    const buttonNext = screen.getByText(/button.next/);

    userEvent.click(buttonNext);

    const content = screen.getByText(/Content 2/);

    expect(content).toBeInTheDocument();
  });

  test('should go to the second step and go back to the first', () => {
    render(<Stepper />);

    const firstContentText = 'Content 1';
    const secondContentText = 'Content 2';

    const buttonNext = screen.getByText(/button.next/);

    userEvent.click(buttonNext);

    const secondContent = screen.getByText(secondContentText);

    expect(screen.queryByText(firstContentText)).not.toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();

    const previousButton = screen.getByText(/button.previous/);

    userEvent.click(previousButton);

    expect(screen.getByText(firstContentText)).toBeInTheDocument();
    expect(screen.queryByText(secondContentText)).not.toBeInTheDocument();
  });
});
