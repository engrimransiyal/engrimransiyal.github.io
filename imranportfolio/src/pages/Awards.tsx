import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import { awards } from "../data/awards.ts";
import Card from "../components/Card.tsx";

export default function Awards(){
  return (
    <div>
      <SectionTitle title={"Honors & Awards"} />
      <div className="grid md:grid-cols-2 gap-4">
        {awards.map(a => (
          <Card key={a.title}>
            <h4 className="font-semibold">{a.title}</h4>
            <p className="text-sm text-black font-semibold">{a.issuer}</p>
            <p className="text-sm text-black">{a.description}</p>
            {a.link && (
              <a href={a.link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline">
                View
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
