import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ParagraphProps {
  text: string | ReactNode;
  maxWidth?: string;
  mx?: string;
  textAlign?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, mx, textAlign }) => {
  return (
    <Typography color="#7b7b7b" mx={mx} text-align={"textAlign"} py={3}>
      {text}
    </Typography>
  );
};

export default Paragraph;
