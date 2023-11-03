import React from "react";
import { Box, Grid, styled } from "@mui/material";
import imgDetail from "../assets/pagodeBanner.jpeg";
import imgDetail2 from "../assets/ElectroWaveBanner.jpeg";
import ContentBox from "./ContentBox";

const GetStarted: React.FC = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6}>
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <ContentBox
            title="SambaSoul Rhythms Festival"
            description="Adentre um universo de ritmos contagiantes e alegria inigualável no SambaSoul Rhythms Festival. Esta noite especial promete uma fusão envolvente entre o pulsar do samba e a alma vibrante do soul. Com um palco vibrante e artistas renomados, você será transportado para o coração pulsante da cultura brasileira."
            href="/"
          />
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <ContentBox
            title="ElectroWave Experience"
            description="Uma noite inesquecível de batidas eletrônicas pulsantes, DJs de renome e uma atmosfera de pura energia. Junte-se a nós na ElectroGroove Night e mergulhe na cena musical mais vibrante da cidade!"
            href="/"
          />
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
