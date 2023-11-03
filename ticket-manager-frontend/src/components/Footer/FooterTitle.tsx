import { Typography, TypographyProps } from "@mui/material";
import React, { FC } from "react";

interface FooterTitleProps {
  text: string;
}

const FooterTitle: FC<FooterTitleProps & TypographyProps> = ({
  text,
  ...props
}) => {
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{
        fontWeight: "700",
        textTransform: "capitalize",
        pb: 1,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default FooterTitle;
