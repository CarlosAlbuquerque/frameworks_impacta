import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import GetStarted from "../components/GetStarted";

const Home: React.FC = () => {
  return (
    <>
      <HeaderMenu />
      <Header />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
