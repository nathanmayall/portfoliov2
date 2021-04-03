import React from "react";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-700 bg-gray-200">
      <div className="flex items-center">
        <h1 className="text-6xl font-thin tracking-wider">Nathan Mayall</h1>
      </div>
      <p className="my-6 tracking-wide">
        <code>Junior Software Engineer</code>
      </p>
      <div className="flex justify-center mt-6">
        <a
          className="uppercase hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiReact className="text-6xl" />
        </a>
        <a
          className="ml-10 uppercase hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTailwindcss className="text-6xl" />
        </a>
      </div>
    </div>
  );
}

export default App;
