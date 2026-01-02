import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React.js", icon: FaReact },
    { name: "Git & GitHub", icon: FaGitAlt },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-500 mb-6"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-14"
        >
          Technologies and tools I use to build modern, responsive,
          and interactive web applications.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-12 md:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-gray-900 p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-indigo-500/20 cursor-pointer"
              >
                <Icon className="text-5xl text-indigo-500 mb-4 transition group-hover:scale-110" />
                <span className="text-sm font-semibold text-gray-200 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
