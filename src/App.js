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
} from "./sections";

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
        <Contact />
      </div>
    </>
  );
};

export default App;
