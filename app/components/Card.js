"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Card = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="text-white h-screen flex items-center justify-center mt-24 sm:mt-5 mb-24">
      <div className="text-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center rounded-md">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          ref={ref1}
        >
          Know Who I Am
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          ref={ref2}
        >
          Hi, I am <b>Baker Allozi</b>, a Computer Engineer from Jordan,
          specializing in front-end development using JavaScript, React,
          Next.js, and Redux. I began my programming journey in 2020,
          transitioning through Kotlin, C++, and Python, before becoming a
          dedicated web developer in 2022.
        </motion.p>

        <motion.p
          className="text-md md:text-xl mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1 }}
          ref={ref3}
        >
          My expertise comes from diverse learning sources, including
          university, online platforms, and hands-on experience with personal
          and open-source projects. I strive to stay updated with cutting-edge
          technologies to deliver impactful solutions.
        </motion.p>

        <motion.div
          className="text-md md:text-xl mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          ref={ref3}
        >
          <h3 className="font-bold mb-2">My Next Learning Steps:</h3>
          <ul className="list-disc list-inside">
            <li>Diving deeper into TypeScript for scalable applications</li>
            <li>Mastering testing frameworks like Jest</li>
            <li>
              Mastering backend development with Node.js and Nest.js, focusing
              on:
              <ul className="list-inside list-decimal ml-6 mt-2">
                <li>
                  Advanced architectures like Microservices and Clean
                  Architecture
                </li>
                <li>Real-time technologies such as WebSockets</li>
                <li>Integrating databases like MySQL and MongoDB</li>
                <li>Caching mechanisms with Redis</li>
                <li>API design and best practices</li>
                <li>
                  Implementing robust authentication and authorization systems
                </li>
              </ul>
            </li>
            <li>Exploring advanced security tools for secure projects</li>
            <li>
              Staying ready to implement modern technologies like GraphQL and
              Micro Frontends upon demand
            </li>
            <li>
              Acquiring proficiency in Jira to streamline team collaboration and
              project management
            </li>
          </ul>
        </motion.div>

        <motion.p
          className="text-md md:text-xl italic text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Always striving to build things that make a difference!
        </motion.p>

        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Card;
