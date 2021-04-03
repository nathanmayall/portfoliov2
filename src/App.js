import React, { Fragment } from "react";

import Icons from "./components/Icons";
import Particles from "react-tsparticles";
import particleOptions from "./components/particleOptions.json";

function App() {
  return (
    <Fragment>
      <div className="absolute h-screen">
        <Particles options={particleOptions} />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen text-center align-middle">
        <div
          className="px-24 py-4 text-gray-700 bg-white bg-opacity-25 rounded-lg shadow-lg"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
          <p className="my-6 tracking-wide ">
            <code>Junior Software Engineer</code>
          </p>
          <Icons />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
