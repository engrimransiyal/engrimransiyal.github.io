import React from "react";

export default function ContactForm(){
  return (
    <form className="max-w-xl mx-auto grid gap-3">
      <input className="bg-[#0f0f0f] border border-gray-800 p-3 rounded" placeholder="Your name" />
      <input className="bg-[#0f0f0f] border border-gray-800 p-3 rounded" placeholder="Email" />
      <textarea className="bg-[#0f0f0f] border border-gray-800 p-3 rounded" rows={5} placeholder="Message..." />
      <div className="text-right">
        <button className="px-4 py-2 bg-accent text-black rounded">Send</button>
      </div>
    </form>
  );
}
