import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import Card from "../components/Card.tsx";
import { experience } from "../data/experience.ts";

export default function Experience() {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((e) => (
          <Card key={e.company}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <p className="text-sm text-gray-400">{e.company} • {e.location}</p>
                <p className="text-xs text-gray-500 mt-1">{e.start} — {e.end}</p>
                <ul className="mt-3 text-sm text-gray-300 list-disc list-inside space-y-1">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <div className="text-sm text-accent">
                <a href={e.link} target="_blank" rel="noreferrer">link</a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
