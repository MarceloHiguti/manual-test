import { IQuizOptionObject } from "@/services/quiz.service";
import { SelectProps } from "@mui/material";

export interface CoreDropdown {
  value: string;
  displayValue: string;
}

export interface ICoreDropdownProps {
  options?: Array<IQuizOptionObject>;
  callbackOnChange?: (option: IQuizOptionObject) => void;
}

export type CoreDropdownProps = SelectProps & ICoreDropdownProps;
