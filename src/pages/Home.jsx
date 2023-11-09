import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Social from "../components/Social";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Social />
      <Footer />
    </>
  );
};

export default Home;
