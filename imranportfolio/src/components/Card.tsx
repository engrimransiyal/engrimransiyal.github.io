import React from "react";
import { motion } from "framer-motion";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 shadow-md hover:shadow-accent/20 transition"
    >
      {children}
    </motion.div>
  );
}
