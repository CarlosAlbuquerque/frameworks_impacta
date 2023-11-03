import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";

interface ContentBoxProps {
  title: string;
  description: string;
  href: string;
}
const CustomTypography = styled(Typography)({
  fontSize: "1.1rem",
  textAlign: "start",
  lineHeight: "1.5",
  color: "#515151",
  marginTop: "1.5rem",
});

const ContentBox: React.FC<ContentBoxProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Box
      component="article"
      sx={{
        px: 4,
      }}
    >
      <CustomTypography
        variant="h4"
        sx={{ fontWeight: "700", textAlign: "start" }}
      >
        {title}
      </CustomTypography>
      <CustomTypography
        variant="body1"
        paragraph
        sx={{
          fontSize: "1.1rem",
          textAlign: "start",
          lineHeight: "1.5",
          color: "#515151",
          marginTop: "1.5rem",
        }}
      >
        {description}
      </CustomTypography>
      <Button
        variant="outlined"
        color="primary"
        href={href}
        sx={{ marginTop: "16px" }}
      >
        Saiba Mais
      </Button>
    </Box>
  );
};

export default ContentBox;
