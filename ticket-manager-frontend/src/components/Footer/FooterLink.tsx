import { Link, LinkProps } from "@mui/material";
import React, { FC } from "react";

interface FooterLinkProps {
  text: string;
}

const FooterLink: FC<FooterLinkProps & LinkProps> = ({ text, ...props }) => {
  return (
    <Link
      href="#"
      variant="body2"
      component="a"
      sx={{
        fontSize: "0.9rem",
        fontWeight: "400",
        textDecoration: "none",
        color: "#414141",
        textTransform: "capitalize",
        "&:hover": {
          color: "#1c2859",
        },
      }}
      {...props}
    >
      {text}
    </Link>
  );
};

export default FooterLink;
