import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  text: string;
  textAlign: string;
}

const Title: React.FC<TitleProps> = ({ text, textAlign }) => {
  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        fontWeight: "700",
        textAlign: textAlign,
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
