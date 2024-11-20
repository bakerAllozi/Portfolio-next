"use client";
import React, { useEffect } from "react";
import useSound from "use-sound";
import BackgroundMusic from "../../public/ElectricityHQ.wav";

const BackgroundSound = () => {
  const [play, { stop }] = useSound(BackgroundMusic, {
    volume: 0.5,
    loop: true,
  });

  React.useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  return null;
};

export default BackgroundSound;
