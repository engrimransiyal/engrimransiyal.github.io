import React from "react";
import Hero from "../components/Hero.tsx";
import SectionTitle from "../components/SectionTitle.tsx";
import { technical, languages, personal } from "../data/skills.ts";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="my-8">
        <SectionTitle>Research Trends</SectionTitle>
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

      <section className="my-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-4 rounded">
            <h4 className="font-semibold mb-3">Technical</h4>
            <ul className="space-y-2">
              {technical.map((s) => <li key={s} className="text-gray-300">• {s}</li>)}
            </ul>
          </div>

          <div className="bg-card p-4 rounded">
            <h4 className="font-semibold mb-3">Languages</h4>
            <ul className="space-y-2">
              {languages.map(l => <li key={l.lang} className="text-gray-300">• {l.lang} — {l.level}</li>)}
            </ul>
          </div>

          <div className="bg-card p-4 rounded">
            <h4 className="font-semibold mb-3">Personal</h4>
            <ul className="space-y-2">
              {personal.map(p => <li key={p} className="text-gray-300">• {p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="my-8">
        <SectionTitle>Hobbies & Interests</SectionTitle>
        <p className="bg-card p-4 rounded">Traveling, Exploring, Debate and Discussion.</p>
      </section>

      <section className="my-8">
        <SectionTitle>Quick Links</SectionTitle>
        <div className="flex gap-4">
          <Link to="/projects" className="px-4 py-2 bg-electric rounded text-black">Projects</Link>
          <Link to="/experience" className="px-4 py-2 border border-gray-700 rounded">Experience</Link>
        </div>
      </section>
    </div>
  );
}
