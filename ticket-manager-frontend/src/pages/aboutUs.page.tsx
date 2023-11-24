import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <HeaderMenu />
      <AboutUs />
      <Footer />
    </>
  );
};

export default AboutUsPage;
