import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 border-t border-purple-200">
      <div className="flex justify-center gap-8 mb-6 text-slate-700">
        <a href="mailto:engrimransiyal@gmail.com" className="hover:text-purple-600 transition">
          <FaEnvelope size={22} />
        </a>
        <a href="https://linkedin.com/in/engrimransiyal" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition">
          <FaGithub size={22} />
        </a>
      </div>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Muhammad Imran — Electrical Engineer Portfolio
      </p>
    </footer>
  );
}
