import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { education } from "../data/education.ts";
import { publications } from "../data/education.ts"; // ✅ import publications
import Card from "../components/Card.tsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  return (
    <div className="mt-5">
      {/* Education Section */}
      <SectionTitle title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed) => (
          <EducationCard key={ed.school} ed={ed} />
        ))}
      </div>

      {/* Publications Section */}
      <div className="mt-12">
        <SectionTitle title="Publications" />
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <Card key={pub.title}>
              <h3 className="font-semibold text-lg text-slate-800">
                {pub.title}
              </h3>
              <p className="text-sm text-slate-600">{pub.authors}</p>
              <p className="text-xs text-slate-500 italic mt-1">
                {pub.journal} • {pub.publisher} • {pub.status}
              </p>
              <p className="mt-3 text-sm text-slate-700">{pub.description}</p>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  View
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard({ ed }: { ed: (typeof education)[0] }) {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <Card>
      <h3 className="font-semibold text-lg text-slate-800">{ed.degree}</h3>
      <p className="text-sm text-slate-600">{ed.school}</p>
      <p className="mt-1 text-xs text-slate-500">
        {ed.start} — {ed.end} • {ed.grade}
      </p>

      {ed.thesis && (
        <p className="mt-3 text-sm text-slate-700 italic">{ed.thesis}</p>
      )}

      {ed.link && (
        <a
          href={ed.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-blue-600 hover:underline"
        >
          View
        </a>
      )}

      {/* Courses */}
      {ed.courses && (
        <div className="mt-4">
          <button
            onClick={() => setShowCourses(!showCourses)}
            className="text-sm font-medium text-purple-600 hover:underline"
          >
            {showCourses ? "Hide Courses ▲" : "Show Courses ▼"}
          </button>

          <AnimatePresence>
            {showCourses && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 pl-5 list-disc text-sm text-slate-700 space-y-1 max-h-60 overflow-y-auto pr-2"
              >
                {ed.courses.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
    </Card>
  );
}
