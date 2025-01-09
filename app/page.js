import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gy from "./components/Gy";
import About from "./components/About";
import Contact from "./components/Contact";
import React from "react";

export default function Home() {
  return (
    <div className="relative container mx-auto">
      <a
        href="/Blue and Gray Simple Professional CV Resume (2) (1).pdf "
        download
        className="fixed top-4 z-50 right-4 bg-[#241738] text-white px-4 py-2 rounded-full shadow-lg text-[10px] sm:text-lg font-bold hover:bg-[#ff0000] hover:text-white transition duration-300 cursor-pointer"
      >
        Download My CV
      </a>

      <div className="py-12 pb-28 relative space-y-16">
        <Hero />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
        />
      </div>

      <About />
      <Gy />
      <Contact />
    </div>
  );
}
