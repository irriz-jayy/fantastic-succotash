import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
