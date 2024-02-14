import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { Button as MUIButton } from "@mui/material";
import deepEqual from "fast-deep-equal/react";
import {
  forwardRef,
  ForwardRefExoticComponent,
  memo,
  PropsWithoutRef,
} from "react";

import styles from "./CoreButton.module.scss";
import classNames from "classnames";

export type CoreButtonProps = LoadingButtonProps & {
  customClassnames?: string;
};

export const CoreButton: ForwardRefExoticComponent<
  PropsWithoutRef<CoreButtonProps>
> = memo(
  forwardRef<HTMLButtonElement, CoreButtonProps>(function CoreButton(
    { children, loading = false, customClassnames = "", ...props },
    ref
  ) {
    const Button = typeof loading === "undefined" ? MUIButton : LoadingButton;

    return (
      <Button
        ref={ref}
        className={classNames(styles.coreButton, {
          [customClassnames]: !!customClassnames,
        })}
        loading={loading}
        {...props}
      >
        {children}
      </Button>
    );
  }),
  deepEqual
);
