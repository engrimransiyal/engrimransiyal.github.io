import React from "react";
import SectionTitle from "../components/SectionTitle.tsx";
import ContactForm from "../components/ContactForm.tsx";

export default function Contact(){
  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="bg-card p-4 rounded">Email: engrimransiyal@gmail.com</p>
          <p className="mt-3 text-gray-400">LinkedIn: <a href="https://www.linkedin.com/in/engrimransiyal" className="text-accent">/in/engrimransiyal</a></p>
          <p className="mt-3 text-gray-400">Location: Changa'n, Xia'n, China</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
