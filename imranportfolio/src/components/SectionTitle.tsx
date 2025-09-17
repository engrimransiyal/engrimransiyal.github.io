import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 text-center md:text-left">
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      <div className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto md:mx-0 rounded"></div>
    </div>
  );
}
