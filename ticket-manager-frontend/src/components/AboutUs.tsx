import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "4rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginBottom: 4,
          background: `url(https://www.tinkle.in/wp-content/themes/tinkle/images/aboutusbannerimg-desktop.jpg) no-repeat center center`,
          backgroundSize: "cover",
          height: "200px", // Defina a altura do banner conforme necessário
        }}
      />
      <Typography variant="h4" component="h2" gutterBottom>
        Sobre Nós
      </Typography>
      <Typography variant="body1" gutterBottom>
        A Ticket Manager é uma plataforma que tem como missão democratizar o
        acesso a eventos de qualidade em todo o Brasil. Nosso foco é promover
        eventos gratuitos que abrangem áreas de conhecimento, cultura e música,
        proporcionando experiências enriquecedoras para pessoas de todas as
        idades e interesses.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fundada em 2018, a Ticket Manager começou como uma pequena startup com
        uma grande visão. Acreditamos no poder dos eventos para unir pessoas,
        inspirar aprendizado e celebrar a cultura. Ao longo dos anos, crescemos
        para nos tornar uma das principais plataformas de venda de ingressos do
        país, conectando organizadores de eventos a uma audiência apaixonada por
        experiências memoráveis.
      </Typography>
      <Typography variant="body1">
        Estamos comprometidos em oferecer uma experiência fácil e segura para
        nossos usuários, garantindo que cada evento seja uma oportunidade única
        de aprendizado e diversão. Junte-se a nós nessa jornada e ajude-nos a
        espalhar a alegria dos eventos por todo o Brasil!
      </Typography>
    </Box>
  );
};

export default AboutUs;
