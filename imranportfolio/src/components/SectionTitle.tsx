import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 text-center md:text-left">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-2 h-1 w-20 bg-accent mx-auto md:mx-0 rounded"></div>
    </div>
  );
}
