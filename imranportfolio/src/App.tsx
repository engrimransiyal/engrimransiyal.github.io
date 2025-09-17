import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Education from "./pages/Education.tsx";
import Projects from "./pages/Projects.tsx";
import Certifications from "./pages/Certifications.tsx";
import Conferences from "./pages/Conferrences.tsx";
import Awards from "./pages/Awards.tsx";
import Recommendations from "./pages/Recommendations.tsx";
import Contact from "./pages/Contact.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#090909] to-[#0b0b0b] text-gray-200 font-display">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
