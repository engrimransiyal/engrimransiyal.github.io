import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import Card from "../components/Card.tsx";
import { projects } from "../data/projects.ts";

export default function Projects() {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <Card key={p.title}>
            <h3 className="font-semibold">{p.title}</h3>
            {/* <p className="text-sm text-gray-600">{p.date}</p> */}
            <p className="mt-2 text-black font-semibold">{p.short}</p>
            <p className="mt-2 text-black">{p.description}</p>
            <div className="mt-3 flex gap-2">
              {p.tags?.map(t => <span className="text-xs px-2 py-1 bg-black/20 rounded" key={t}>{t}</span>)}
              {p.link && <a className="ml-auto text-accent hover:cursor-pointer hover:underline" href={p.link} target="_blank" rel="noreferrer">Read</a>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
