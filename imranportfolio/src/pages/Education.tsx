import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { education } from "../data/education.ts";
import Card from "../components/Card.tsx";

export default function Education() {
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed) => (
          <Card key={ed.school}>
            <h3 className="font-semibold">{ed.degree}</h3>
            <p className="text-gray-400">{ed.school}</p>
            <p className="mt-2 text-sm text-gray-500">{ed.start} — {ed.end} • {ed.grade}</p>
            {ed.thesis && <p className="mt-3 text-sm">{ed.thesis}</p>}
            {ed.link && <a href={ed.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-accent">View</a>}
          </Card>
        ))}
      </div>
    </div>
  );
}
