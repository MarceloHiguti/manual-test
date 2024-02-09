import { IQuizOptionObject } from '@/services/quiz.service';
import { SelectChangeEvent, SelectProps } from '@mui/material';
// import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface CoreDropdown {
  value: string;
  displayValue: string;
}

export interface ICoreDropdownProps {
  options?: Array<IQuizOptionObject>;
  // onHandleChange?: (field: ControllerRenderProps<FieldValues, string>, e: SelectChangeEvent<unknown>) => void;
  // onValueSelected?: (field: ControllerRenderProps<FieldValues, string>) => string;
}

export type CoreDropdownProps = SelectProps & ICoreDropdownProps;
