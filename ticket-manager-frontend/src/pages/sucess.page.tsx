import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessPage() {
  return (
    <>
      <HeaderMenu />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "primary.main", width: 64, height: 64 }}>
            <CheckCircleIcon fontSize="large" />
          </Avatar>
          <Typography variant="h6" component="div" marginBottom={60}>
            Operação concluída com sucesso!
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
