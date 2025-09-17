import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { conferences } from "../data/conferrences.ts";
import Card from "../components/Card.tsx";

export default function Conferences(){
  return (
    <div className="mt-5">
      <SectionTitle title="Conferences & Seminars" />
      <div className="grid md:grid-cols-2 gap-4">
        {conferences.map(c => (
          <Card key={c.title}>
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-sm text-gray-900">{c.description} • {c.description}</p>
            <p className="text-sm text-black font-semibold">{c.date} • {c.location}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
