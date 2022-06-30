import React from "react";
import { Navbar, About, Contact, Home, Skills } from "./sections";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
