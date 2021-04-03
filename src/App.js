import React from "react";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-700 bg-gray-200">
      <div className="flex items-center">
        <h1 className="text-6xl font-thin tracking-wider text-shadow-lg">
          Nathan Mayall
        </h1>
      </div>
      <p className="my-6 tracking-wide">
        <code>Junior Software Engineer</code>
      </p>
      <Icons />
    </div>
  );
}

export default App;
