import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login.page";
import SignupPage from "./pages/signup.page";
import EventRegister from "./pages/eventsRegister.page";
import SuccessPage from "./pages/sucess.page";

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
      </Routes>
    </>
  );
}

export default App;
