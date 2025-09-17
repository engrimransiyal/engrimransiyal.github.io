import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 my-12">
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl font-extrabold">
          Muhammad <span className="text-accent">Imran</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-lg">
          Electrical Engineer specializing in Power Systems, Power Electronics, 
          and Energy Management. Focused on delivering sustainable energy solutions.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <motion.a
            href="/projects"
            className="px-5 py-2 rounded-xl bg-accent text-black font-semibold shadow hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            className="px-5 py-2 rounded-xl border border-accent text-accent hover:bg-accent hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 flex justify-center"
      >
        <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-electric to-accent p-1">
          <img
            src="https://i.pravatar.cc/300"
            alt="Imran"
            className="w-full h-full rounded-full object-cover border-4 border-black"
          />
        </div>
        <div className="absolute -bottom-6 w-40 h-40 bg-electric/20 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  );
}
