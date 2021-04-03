import React from "react";

import Title from "./components/Title";
import { DiHtml5, DiReact } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiNodeDotJs,
  SiWebpack,
  SiKubernetes,
} from "react-icons/si";

function App() {
  return (
    <>
      <Title />
      <div className="w-screen h-auto bg-cover bg-code-image">
        <div className="bg-gradient-to-b to-transparent from-white">
          <div className="text-center text-gray-700">
            <h1 className="mb-1 text-6xl text-shadow-md">My Expertise</h1>
            <p>
              I'm a full stack junior developer, currently a student at
              Manchester Codes. This is a collection of my work so far.
            </p>
          </div>
          <div className="container flex flex-col flex-wrap w-auto h-screen place-content-around place-items-center">
            <div
              className="justify-between p-8 text-center text-gray-700 bg-white rounded-lg shadow-lg bg-opacity-40 w-96"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <h2 className="text-2xl text-shadow-sm">Design</h2>
              <div className="flex justify-between mx-4 my-3 text-6xl">
                <DiHtml5 className="text-html5" />
                <SiTailwindcss className="text-TailwindLogo" />
                <DiReact className="text-ReactLogo" />
              </div>
              <p>
                Using Material Design, TailwindCSS and other component
                bootstraps, I've made a few sites and applications. This is the
                first site I developed using node/react: absocial.me Ask me
                about others!
              </p>
            </div>
            <div
              className="p-8 text-center text-gray-700 bg-white rounded-lg shadow-lg bg-opacity-40 w-96"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <h2 className="text-2xl text-shadow-sm">Languages</h2>
              <div className="flex justify-between mx-4 my-3 text-6xl">
                <SiJavascript className="bg-white text-javascript" />
                <SiPostgresql className="text-postgresql" />
                <SiTypescript className="bg-white text-typescript" />
              </div>
              <p>
                My main development languages are Javascript, Typescript, HTML,
                CSS etc. I also know SQL syntax as I do both front-end and
                back-end work.
              </p>
            </div>
            <div
              className="p-8 text-center text-gray-700 bg-white rounded-lg shadow-lg bg-opacity-40 w-96"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <h2 className="text-2xl text-shadow-sm">Tools</h2>
              <div className="flex justify-between mx-4 my-3 text-6xl">
                <SiNodeDotJs className="text-nodejs" />
                <SiWebpack className="text-webpack" />
                <SiKubernetes className="text-kubernetes" />
              </div>
              <p>
                Git, GitHub, Xen Orchestra, Virtualisation, WSL, Docker,
                Kubernetes... the list goes on. Below are some of the services I
                run on my home server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
