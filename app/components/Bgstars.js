"use client";
import { motion } from "framer-motion";

const Star = ({ x, y, delay }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: "2px", height: "2px", top: y, left: x }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      delay,
    }}
  />
);

const BgStars = () => {
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
  }));

  return (
    <div className=" absolute w-full h-[450vh]   overflow-hidden ">
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} delay={star.delay} />
      ))}
    </div>
  );
};

export default BgStars;
