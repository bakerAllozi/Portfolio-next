"use client";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import TypingText from "../components/TypingText";

function Hero() {
  useEffect(() => {
    toast.info("⏳ Let's go! Save time and check out my top two projects now.");
  }, []);

  return (
    <div className="text-center w-fit mt-10 mx-auto">
      <TypingText />

      <div className="text-white font-extrabold text-[4vw] mb-9">
        Transforming Concepts into Seamless
        <span className="text-[#CBACF9]"> User Experiences</span>
      </div>
    </div>
  );
}

export default Hero;
