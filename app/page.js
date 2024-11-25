import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import TypingText from "./components/TypingText";
import Gy from "./components/Gy";
import About from "./components/About";
import Contact from "./components/Contact";
import React from "react";
import { PiArrowBendUpRightBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className=" relative container  mx-auto ">
      <div className="  py-12  pb-28  relative space-y-16  ">
        <Hero />
        <ToastContainer
          position="top-center"
          autoClose={500000}
          hideProgressBar
          newestOnTop
        />
      </div>
      <About />
      <Gy />
      <PiArrowBendUpRightBold />
      {/* <Project2 /> */}
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
