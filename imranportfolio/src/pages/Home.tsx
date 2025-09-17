import React from "react";
import Hero from "../components/Hero.tsx";
import SectionTitle from "../components/SectionTitle.tsx";
import { technical, languages, personal,skills } from "../data/skills.ts";
import Card from "../components/Card.tsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt, FaLanguage, FaUsers, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
        
      <Hero />
      <section className="my-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded circuit-border">
            <h4 className="font-semibold">Power Systems</h4>
            <p className="text-sm text-gray-400 mt-2">Grid integration, protection, and reliability.</p>
          </div>
          <div className="bg-card p-4 rounded circuit-border">
            <h4 className="font-semibold">Power Electronics</h4>
            <p className="text-sm text-gray-400 mt-2">Converter design, resonant converters, control strategies.</p>
          </div>
          <div className="bg-card p-4 rounded circuit-border">
            <h4 className="font-semibold">Energy Management</h4>
            <p className="text-sm text-gray-400 mt-2">EV charging, battery integration, MPPT and optimization.</p>
          </div>
        </div>
      </section>
      <section className="my-16 relative">
      <SectionTitle title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-8 shadow-md border-l-4 border-blue-400"
      >
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          I am a <span className="font-bold text-blue-700">qualified electrical engineer</span> 
          with expertise in power systems, duly registered with the Pakistan Engineering Council. 
          Currently, I am pursuing a master’s degree in Electrical Engineering at{" "}
          <span className="font-semibold text-purple-700">
            Northwestern Polytechnical University, China
          </span>.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          My research focuses on{" "}
          <span className="italic font-semibold text-pink-700">
            “Controlling Techniques of Four-Switch Buck-Boost Converters”
          </span>, with applications in renewable energy and electric vehicles.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          With 3 years of professional experience in power systems and an
          ongoing master’s degree, I am committed to advancing my expertise.
          I am currently seeking{" "}
          <span className="font-semibold text-blue-700">
            internships or research opportunities
          </span>{" "}
          to contribute to innovation in the field of electrical engineering.
        </p>
      </motion.div>
    </section>

      {/* Core Skills */}
      <section className="my-12">
        <SectionTitle title="Skills" />
        <div className="grid md:grid-cols-3 gap-10">
          {/* Technical */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-3">
              <FaBolt className="text-blue-500" /> Technical
            </h4>
            <ul className="flex flex-wrap gap-2">
              {technical.map((s) => (
                <motion.li
                  key={s}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-slate-700 rounded-lg shadow-sm cursor-default"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-3">
              <FaLanguage className="text-purple-500" /> Languages
            </h4>
            <ul className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <motion.li
                  key={l.lang}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-slate-700 rounded-lg shadow-sm cursor-default"
                >
                  {l.lang} — {l.level}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Personal */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-pink-700 mb-3">
              <FaUsers className="text-pink-500" /> Personal
            </h4>
            <ul className="flex flex-wrap gap-2">
              {personal.map((p) => (
                <motion.li
                  key={p}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 text-slate-700 rounded-lg shadow-sm cursor-default"
                >
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Extended Skills */}
      <section className="my-12">
        <SectionTitle title="Extended Skills" />
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-indigo-700 border-l-4 border-indigo-400 pl-3 mb-3">
                {category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-100 text-slate-700 rounded-md shadow-sm hover:shadow-md transition cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8">
        <SectionTitle title="Hobbies & Interests" />
        <p className="bg-card p-4 rounded">Traveling, Exploring, Debate and Discussion.</p>
      </section>

      {/* Quick Links */}
      <section className="my-8">
        <SectionTitle title="Quick Links" />
        <div className="flex gap-4">
          <Link to="/projects" className="px-4 py-2 bg-electric rounded text-black">Projects</Link>
          <Link to="/experience" className="px-4 py-2 border border-gray-700 rounded">Experience</Link>
          
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" className="my-16">
        <SectionTitle title="Contact Me" />
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923030757478"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-green-100 text-green-700 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-2xl" /> WhatsApp
          </a>

          {/* Gmail */}
          <a
            href="mailto:yourgmail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-red-100 text-red-700 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaEnvelope className="text-2xl" /> Gmail
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-blue-100 text-blue-700 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
