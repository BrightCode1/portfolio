import React from "react";
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
  return (
    <>
      <Navbar />
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
      <ScrollTop />
    </>
  );
};

export default App;
