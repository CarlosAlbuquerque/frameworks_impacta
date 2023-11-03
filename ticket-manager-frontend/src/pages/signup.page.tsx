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
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";

const signupSchema: any = object({
  firstName: string(),
  lastName: string(),
  email: string(),
  password: string(),
});

type ISignUp = TypeOf<typeof signupSchema>;

export default function SignUp() {
  const defaultValues: ISignUp = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const methods = useForm<ISignUp>({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ISignUp> = async (values: ISignUp) => {
    try {
      const body = {
        email: values.email,
        name: `${values.firstName} ${values.lastName}`,
        password: values.password,
      };
      const response = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "no-cors",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response, "responseresponse");
      // TODO redirect page sucess
    } catch (error) {
      console.log("dale");
    }
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
            Cadastro de Usuário
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  control={methods.control}
                  name="firstName"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      label="Primeiro Nome"
                      autoFocus
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  control={methods.control}
                  name="lastName"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      autoComplete="family-name"
                      required
                      fullWidth
                      label="Ultimo Nome"
                      autoFocus
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  control={methods.control}
                  name="email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      autoComplete="email"
                      required
                      fullWidth
                      label="Email"
                      autoFocus
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  control={methods.control}
                  name="password"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      autoComplete="new-password"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              disabled={!methods.formState.isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item marginBottom={10}>
                <Link href="/login" variant="body2">
                  {"Já possui uma conta? Acessar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
