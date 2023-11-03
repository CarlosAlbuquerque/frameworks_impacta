import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";

const loginSchema = object({
  email: string().min(1, "Email is required").email("Email is invalid"),
  password: string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

type ILogin = TypeOf<typeof loginSchema>;

export default function LoginPage() {
  const defaultValues: ILogin = {
    email: "",
    password: "",
  };

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(JSON.stringify(values, null, 4));
  };

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
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={methods.handleSubmit(onSubmitHandler)}
              sx={{ mt: 3, width: "100%", marginBottom: "2rem" }}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{ ...methods.register("email") }}
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ mt: 2 }}
                inputProps={{ ...methods.register("password") }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Acessar
              </Button>
              <Grid container marginBottom={15}>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Não possui uma conta? Cadastro"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
