import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Icons() {
  return (
    <div className="flex justify-center mt-6 space-x-6">
      <a
        href="https://www.linkedin.com/in/nathan-mayall-1a09a279"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-6xl" />
      </a>
      <a
        href="mailto:nathanmayall@icloud.com?subject=I've seen your portfolio and..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail className="text-6xl" />
      </a>
      <a
        href="https://github.com/nathanmayall"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-6xl" />
      </a>
    </div>
  );
}
