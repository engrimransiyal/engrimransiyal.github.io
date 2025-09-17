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
            <p className="text-sm text-gray-400">{a.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
