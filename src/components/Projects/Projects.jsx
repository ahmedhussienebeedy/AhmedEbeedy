import React from "react";
import { motion } from "framer-motion";

 import project2 from "../../assets/images/1chat.jpg";
 import project3 from "../../assets/images/2ecomm.jpg";
 import project4 from "../../assets/images/3dash.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Tailwind CSS, Framer Motion, responsive design and modern UI.",
      link: "https://ahmed-ebeedy.vercel.app",
      image: project2,
      glow: "from-indigo-500 to-purple-600",
    },
    {
      title: "E-commerce Store",
      description:
        "Full e-commerce system with product listing, cart, API integration and clean UI.",
      link: "https://ahmedebeedy.wasmer.app/",
      image: project3,
      glow: "from-green-500 to-emerald-600",
    },
    {
      title: "AI Chatbot",
      description:
        "AI chatbot supports text & voice, handles website inquiries and smart responses.",
      link: "#",
      image: project2,
      glow: "from-purple-500 to-pink-600",
    },
    {
      title: "Admin Dashboard",
      description:
        "Dashboard with charts, tables, authentication and responsive layout.",
      link: "https://racing-enjoy.web.app/login.html",
      image: project4,
      glow: "from-yellow-400 to-orange-500",
    },
  ];

  return (
   <>
    <section className="relative min-h-screen w-full bg-[#0b0f19] overflow-hidden">
      {/* animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-white pt-32"
      >
        My Projects
      </motion.h2>

      {/* grid */}
      <div className="mt-20 px-6 md:px-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group relative aspect-square rounded-2xl overflow-hidden"
          >
            {/* glow border */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.glow} opacity-0 group-hover:opacity-100 blur-xl transition`}
            />

            {/* card */}
            <div className="relative z-10 h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description.split(" ").slice(0, 18).join(" ")}...
              </p>

              <span className="mt-auto text-indigo-400 text-sm font-semibold">
                View Project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
   </>
  );
}
