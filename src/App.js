import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-700 bg-gray-200">
      <div className="flex items-center">
        <h1 className="text-6xl font-thin tracking-wider">
          Create React App + Tailwind CSS
        </h1>
      </div>
      <p className="my-6 tracking-wide">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="flex justify-center mt-6">
        <a
          className="uppercase hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="ml-10 uppercase hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
      </div>
    </div>
  );
}

export default App;
