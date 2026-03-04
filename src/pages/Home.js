import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import About from "../components/About";
// import Careers from "../components/Careers";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Services />
      <About />
      {/* <Careers />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default Home;
