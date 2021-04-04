import React from "react";

import Title from "./components/Title";

import Design from "./components/Design";
import Languages from "./components/Languages";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Title />
      <div className="w-auto h-auto bg-cover bg-code-image">
        <div className="bg-gradient-to-b to-transparent from-white">
          <div className="text-center text-gray-700">
            <h1 className="mb-1 text-6xl text-shadow-md">My Expertise</h1>
            <p>
              I'm a full stack junior developer, currently a student at
              Manchester Codes. This is a collection of my work so far.
            </p>
          </div>
          <div className="flex flex-col flex-wrap w-auto h-screen place-content-around">
            <Design />
            <Languages />
            <Tools />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
