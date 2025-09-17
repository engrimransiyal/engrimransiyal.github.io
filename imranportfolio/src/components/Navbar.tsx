import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/conferences", label: "Conferences" },
  { to: "/awards", label: "Awards" },
  { to: "/recommendations", label: "Recommendations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.span
          className="text-xl font-bold text-accent"
          whileHover={{ scale: 1.1 }}
        >
          ⚡ Imran Portfolio
        </motion.span>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative px-1 transition ${
                    isActive ? "text-accent" : "hover:text-electric"
                  }`
                }
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
