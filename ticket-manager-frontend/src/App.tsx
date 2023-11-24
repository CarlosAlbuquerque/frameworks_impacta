import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login.page";
import SignupPage from "./pages/signup.page";
import EventRegister from "./pages/eventsRegister.page";
import SuccessPage from "./pages/sucess.page";
import EventList from "./pages/eventsList.page";
import AboutPage from "./pages/aboutUs.page";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/event-register" element={<EventRegister />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
