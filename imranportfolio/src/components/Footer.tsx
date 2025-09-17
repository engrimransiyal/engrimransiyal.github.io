import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 mb-4">
        <a href="mailto:engrimransiyal@gmail.com" className="hover:text-accent">
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://linkedin.com/in/engrimransiyal"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent"
        >
          <FaGithub size={20} />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Muhammad Imran — All Rights Reserved
      </p>
    </footer>
  );
}
