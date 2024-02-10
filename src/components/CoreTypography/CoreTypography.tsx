import { CoreTypographyProps, CoreTypographyVariant } from './CoreTypography.model';
import styles from './CoreTypography.module.scss';
import { getComponentByVariant } from './CoreTypography.util';

export const CoreTypography: React.FC<CoreTypographyProps> = ({
  children,
  component,
  customClassName = '',
  variant = CoreTypographyVariant.BODY_01_REGULAR,
  ...props
}) => {
  const Component = getComponentByVariant({ variant, component });

  return (
    <Component
      className={`${styles[variant]} ${customClassName}`}
      data-testid={`core-typography-${children}`}
      {...props}
    >
      {children}
    </Component>
  );
};
