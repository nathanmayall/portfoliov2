import React, { Fragment } from "react";

import Icons from "./Icons";
import Particles from "react-tsparticles";
import particleOptions from "./particleOptions.json";

export default function Title() {
  return (
    <Fragment>
      <Particles
        options={particleOptions}
        className="absolute z-0 w-screen h-screen"
      />
      <div className="relative flex h-screen">
        <div
          className="px-20 py-4 m-auto text-center text-gray-700 bg-white rounded-lg shadow-lg bg-opacity-10"
          style={{ backdropFilter: "blur(3px)" }}
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
      <div className="text-center bg-gray-400 shadow my-30">
        <p>Testing some text further below</p>
      </div>
    </Fragment>
  );
}
