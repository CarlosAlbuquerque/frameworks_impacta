import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";
import EventCard from "../components/EventCard";

interface Event {
  id: number;
  eventName: string;
  description: string;
  date: string;
  time: string;
  imageUrl: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <HeaderMenu />
      <Container>
        <Grid container spacing={2}>
          {events.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default EventList;
