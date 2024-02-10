import { ContentStepperActionButtonsPlacement } from './ContentStepper.model';

export function shouldDisplayEmptyBox(
  actionButtonsPlacement: ContentStepperActionButtonsPlacement
): actionButtonsPlacement is ContentStepperActionButtonsPlacement.EDGE {
  return actionButtonsPlacement === ContentStepperActionButtonsPlacement.EDGE;
}

export function getActionButtonsPlacementClasses(
  styles: {
    readonly [key: string]: string;
  },
  actionButtonsPlacement: ContentStepperActionButtonsPlacement
): Record<string, boolean> {
  return {
    [styles.contentStepper__buttonsLeft]: actionButtonsPlacement === ContentStepperActionButtonsPlacement.LEFT,
    [styles.contentStepper__buttonsRight]: actionButtonsPlacement === ContentStepperActionButtonsPlacement.RIGHT,
    [styles.contentStepper__buttonsCenter]: actionButtonsPlacement === ContentStepperActionButtonsPlacement.CENTER,
  };
}
