import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Careers from "../components/Careers";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <HeroSlider />
      </div>

      <Services />

      <About />

      <TechStack />

      <Stats />

      <Portfolio />

      <Careers />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;
