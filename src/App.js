import React from "react";
import {
  Navbar,
  About,
  Contact,
  Home,
  Skills,
  Qualification,
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
        <Contact />
      </div>
    </>
  );
};

export default App;
