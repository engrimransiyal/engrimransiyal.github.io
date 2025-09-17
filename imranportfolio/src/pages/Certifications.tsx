import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import Card from "../components/Card.tsx";
import { certifications } from "../data/certifications.ts";

export default function Certifications(){
  return (
    <div className="mt-5">
      <SectionTitle title="Certifications" />
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((c) => (
          <Card key={c.title}>
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-sm text-gray-400">{c.issuer}</p>
            <a 
              href={c.link} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-2 inline-block text-accent text-sm"
            >
              View Certificate
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
