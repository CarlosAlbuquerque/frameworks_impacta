import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

interface EventCardProps {
  event: {
    eventName: string;
    description: string;
    date: string;
    time: string;
    imageUrl: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      <Card sx={{ maxWidth: 345, height: 350 }}>
        <CardMedia
          component="img"
          height="140"
          image={event.imageUrl}
          alt={event.eventName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.eventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.date}
          </Typography>
          <br></br>
          <Box>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                borderColor: "#14192d",
                color: "#fff",
                backgroundColor: "#14192d",
                "&&:hover": {
                  backgroundColor: "#343a55",
                },
                "&&:focus": {
                  backgroundColor: "#343a55",
                },
              }}
            >
              Adquirir
            </Button>
          </Box>
        </CardContent>
      </Card>
      <br></br>
    </>
  );
};

export default EventCard;
