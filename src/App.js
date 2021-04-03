import React, { Fragment } from "react";

import Icons from "./components/Icons";
import Particles from "react-tsparticles";
import particleOptions from "./components/particleOptions.json";

function App() {
  return (
    <Fragment>
      <div className="absolute w-full h-full">
        <Particles options={particleOptions} />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-gray-700">
        <div className="flex items-center">
          <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
        </div>
        <p className="my-6 tracking-wide">
          <code>id='JuniorSoftwareEngineer'</code>
        </p>
        <Icons />
      </div>
    </Fragment>
  );
}

export default App;
