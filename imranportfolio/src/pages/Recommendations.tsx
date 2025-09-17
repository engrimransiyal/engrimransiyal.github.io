import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { recommendations } from "../data/recommendations.ts";
import Card from "../components/Card.tsx";

export default function Recommendations(){
  return (
    <div>
      <SectionTitle>Recommendations</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {recommendations.map(r => (
          <Card key={r.name}>
            <h4 className="font-semibold">{r.name}</h4>
            <p className="text-sm text-gray-400">{r.title}</p>
            <a className="text-accent text-sm" href={r.link} target="_blank" rel="noreferrer">View</a>
            <p className="text-xs text-gray-500 mt-2">{r.email}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
