import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { recommendations } from "../data/recommendations.ts";
import Card from "../components/Card.tsx";

export default function Recommendations(){
  return (
    <div>
      <SectionTitle title="Recommendations" />
      <div className="grid md:grid-cols-2 gap-4">
        {recommendations.map(r => (
          <Card key={r.name}>
            <h4 className="font-semibold">{r.name}</h4>
            <p className="text-sm text-gray-800">{r.title}</p>
            <p className="text-xs text-black mt-2">{r.description}</p>
            <a className="text-accent text-sm hover:cursor-pointer hover:underline" href={r.link} target="_blank" rel="noreferrer">View</a>
            <p className="text-xs text-gray-500 mt-2">{r.email}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
