import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-purple-900/80 via-indigo-800/70 to-blue-900/80 backdrop-blur-2xl border-b border-white/20 shadow-2xl"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <span className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full p-2 shadow-xl">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <motion.circle
                cx="12"
                cy="12"
                r="10"
                stroke="#00E0FF"
                strokeWidth="2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.path
                d="M8 12l2 2 4-4"
                stroke="#FF00A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7 }}
              />
            </svg>
          </span>
          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg tracking-widest">
            Imran Portfolio
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {links.map((l) => (
            <li key={l.to} className="relative group">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
  `relative px-4 py-2 rounded-xl transition-all duration-300 ${
    isActive
      ? "text-blue-300 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-400 after:rounded"
      : "text-white hover:text-pink-400"
  }`
}

              >
                {l.label}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded group-hover:w-full transition-all"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-2 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="w-8 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded transition-all group-hover:w-10"></span>
          <span className="w-6 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded transition-all group-hover:w-8"></span>
          <span className="w-4 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded transition-all group-hover:w-6"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            className="md:hidden flex flex-col gap-6 px-8 py-8 bg-gradient-to-br from-purple-900/90 via-indigo-800/80 to-blue-900/90 backdrop-blur-2xl border-t border-white/20 shadow-2xl rounded-b-2xl"
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-xl font-bold transition-all ${
                      isActive
                        ? "text-blue-400 bg-white/10 shadow-md"
                        : "text-white hover:text-pink-400 hover:bg-white/10"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}