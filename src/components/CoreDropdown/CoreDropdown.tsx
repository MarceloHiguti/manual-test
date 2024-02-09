import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';

import { CoreDropdownProps } from './CoreDropdown.model';

export const CoreDropdown: FC<CoreDropdownProps> = ({
  inputProps,
  disabled,
  inputRef,
  options,
  label,
  labelId,
  error,
  required,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        {...props}
        ref={inputRef}
        error={error}
        label={label}
        labelId={labelId}
      >
        {options
          ? options.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};
