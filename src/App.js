import "./style.css";
import "./responsive.css";

import TopToDownButton from "./components/TopToDownButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopToDownButton />

      <Navbar />

      <Hero />

      <AboutMe />

      <Education />

      <Portfolio />

      <Technologies />

      <Footer />
    </>
  );
};

export default App;
