import React from "react";
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-500 mb-6 animate-fadeUp">
          My Skills
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14 animate-fadeIn">
          Technologies and tools I use to build modern, responsive,
          and interactive web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-gray-900 p-6 flex flex-col items-center justify-center
                           shadow-xl transition-all duration-300 ease-out
                           hover:-translate-y-3 hover:shadow-indigo-500/30"
              >
                <Icon className="text-5xl text-indigo-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold text-gray-200 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
