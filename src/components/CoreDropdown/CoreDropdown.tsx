import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState } from "react";

import { CoreDropdownProps } from "./CoreDropdown.model";
import Image from "next/image";
import { AMAZON_IMAGES_DOMAIN } from "@/utils/quiz.util";

export const CoreDropdown: FC<CoreDropdownProps> = ({
  inputProps,
  disabled,
  inputRef,
  options,
  label,
  labelId,
  error,
  required,
  callbackOnChange,
  ...props
}) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value;
    setValue(selectedValue as string);
    const optionFound = options?.find(({ value }) => value === selectedValue);
    !!optionFound && callbackOnChange?.(optionFound);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        {...props}
        ref={inputRef}
        error={error}
        label={label}
        labelId={labelId}
        value={value}
        onChange={handleChange}
      >
        {options
          ? options.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label.includes(AMAZON_IMAGES_DOMAIN) ? (
                  <Image
                    src={option?.label}
                    alt="image option"
                    width={35}
                    height={35}
                  />
                ) : (
                  option?.label
                )}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};
