import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import Card from "../components/Card.tsx";
import { projects } from "../data/projects.ts";

export default function Projects() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-5">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title}>
            <h3 className="font-semibold text-lg text-slate-800">{p.title}</h3>
            <p className="mt-2 text-slate-700 font-semibold">{p.short}</p>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              {p.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 items-center">
              {p.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded shadow-sm"
                >
                  {t}
                </span>
              ))}

              
            </div>
            {p.link && (
                <a
                  className="ml-auto text-blue-600 font-medium hover:underline"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read
                </a>
              )}
          </Card>
        ))}
      </div>
    </div>
  );
}
