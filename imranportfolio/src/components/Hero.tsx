import React from "react";
import { motion } from "framer-motion";
import { GiElectric } from "react-icons/gi";

export default function Hero() {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
          Muhammad{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Imran
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-lg">
          Electrical Engineer specializing in Power Systems ⚡, Power Electronics 🔋, 
          and Energy Management. Passionate about building sustainable solutions 
          for the future.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          {/* Projects Button */}
          <motion.a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>

          {/* Contact Button with Scroll */}
          <motion.button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl border-2 border-purple-400 text-purple-600 font-semibold hover:bg-purple-50"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Right Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 flex justify-center"
      >
        <div className="w-60 h-60 rounded-full border-4 border-purple-400 shadow-lg shadow-blue-200 flex items-center justify-center bg-white">
          <img
            src="/Images/imran.jpg"
            alt="Imran"
            className="w-56 h-56 rounded-full object-cover"
          />
        </div>
        <GiElectric className="absolute -bottom-6 right-12 text-yellow-400 text-6xl animate-pulse" />
      </motion.div>
    </section>
  );
}
