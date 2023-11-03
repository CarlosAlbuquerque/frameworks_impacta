import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={"Ticket Manager"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; {new Date().getFullYear()} Ticket Manager
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
