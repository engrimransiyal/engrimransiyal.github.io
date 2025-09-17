import React from "react";
import { motion } from "framer-motion";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03, rotate: 0.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-lg hover:shadow-2xl"
    >
      {/* Inner content */}
      <div className="bg-white rounded-2xl p-6 h-full transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-pink-50">
        <div className="text-slate-800 group-hover:text-slate-900 transition-colors">
          {children}
        </div>
      </div>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></span>
    </motion.div>
  );
}
