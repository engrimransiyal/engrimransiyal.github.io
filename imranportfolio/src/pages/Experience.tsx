import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import Card from "../components/Card.tsx";
import { experience } from "../data/experience.ts";

export default function Experience() {
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((e) => (
          <Card key={e.company}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <p className="text-sm text-black">{e.company} • {e.location}</p>
                <p className="text-xs text-black mt-1">{e.start} — {e.end}</p>
                <ul className="mt-3 text-sm text-black list-disc list-inside space-y-1">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <div className="text-sm text-accent">
  {e.link && (
    <a
      href={e.link.trim()} // trims accidental spaces
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-blue-600 hover:cursor-pointer hover:underline"
    >
      Link
    </a>
  )}
</div>

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
