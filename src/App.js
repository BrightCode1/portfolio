import React, { useEffect, useState } from "react";
import {
  Navbar,
  About,
  Contact,
  Home,
  Skills,
  Qualification,
  Services,
  Portfolio,
  Project,
  Footer,
} from "./sections";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const [isCurrentSection, setIsCurrentSection] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  //change website theme color on button on load using useeffect
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.classList.add(theme);
    }
  }, []);

  return (
    <>
      <Navbar
        currentSection={currentSection}
        isCurrentSection={isCurrentSection}
      />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Project />
        <Contact />
        <Footer />
      </div>
      <ScrollTop
        setIsCurrentSection={setIsCurrentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
};

export default App;
