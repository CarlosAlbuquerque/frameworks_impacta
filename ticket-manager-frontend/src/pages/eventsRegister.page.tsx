import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";

const eventSchema = object({
  eventName: string().required("Nome do evento é obrigatório"),
  capacity: number().required("Capacidade é obrigatória").positive().integer(),
  location: string().required("Localização é obrigatório"),
  date: string().required("Data do evento é obrigatória"),
  time: string().required("Horário do evento é obrigatório"),
  description: string().required("Descrição é obrigatória"),
  imageUrl: string().required("Imagem é obrigatória"),
});

type IEvent = {
  eventName: string;
  capacity: number;
  location: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
};

export default function EventForm() {
  const defaultValues: IEvent = {
    eventName: "",
    capacity: 0,
    location: "",
    date: "",
    time: "",
    description: "",
    imageUrl: "",
  };

  const methods = useForm<IEvent>({
    resolver: yupResolver(eventSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<IEvent> = async (values: IEvent) => {
    try {
      const body = {
        name: values.eventName,
        capacity: values.capacity,
        date: new Date(`${values.date} ${values.time}`).toISOString(),
        location: values.location,
        description: values.description,
        imageUrl: values.imageUrl,
      };
      console.log(body, "bodybody");
      await fetch("http://localhost:3333/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      window.location.replace("http://localhost:3000/success");
    } catch (error) {
      console.error(error);
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
            <EventIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de Evento
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="eventName"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Nome do Evento"
                      autoFocus
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="capacity"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Capacidade"
                      type="number"
                      inputProps={{ min: "0" }}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="location"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Localização do Evento"
                      autoFocus
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="date"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Data do Evento"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="time"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Horário do Evento"
                      type="time"
                      InputLabelProps={{ shrink: true }}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="imageUrl"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Url da imagem"
                      autoFocus
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={methods.control}
                  name="description"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      autoComplete="off"
                      required
                      fullWidth
                      label="Descrição"
                      multiline
                      rows={4}
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
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
              Cadastrar Evento
            </Button>

            <Grid item marginBottom={1}></Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
