import { Typography, TypographyProps } from "@mui/material"
import { FC } from "react"

interface ICoreText extends TypographyProps{
  customClassName?: string
}

export const CoreText: FC<ICoreText> = ({customClassName = '', children}) => {
  return (
    <Typography className={customClassName}>{children}</Typography>
  )
}