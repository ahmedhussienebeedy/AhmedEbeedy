import React from "react";
import cvImage from "../../assets/images/cvimage.JPG";
import { motion } from "framer-motion";

export default function Home() {
  const whatsappNumber = "201040550125";
  const message = "Hello! I found your website and would like to chat.";

  // Predefined dots & lines (no random)
  const dots = [
    { cx: 100, cy: 100, r: 3 },
    { cx: 200, cy: 50, r: 4 },
    { cx: 300, cy: 150, r: 2.5 },
    { cx: 400, cy: 100, r: 3.5 },
    { cx: 500, cy: 200, r: 3 },
  ];

  const lines = [
    { x1: 100, y1: 100, x2: 200, y2: 50 },
    { x1: 300, y1: 150, x2: 400, y2: 100 },
    { x1: 200, y1: 50, x2: 500, y2: 200 },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">

        {/* Animated molecules background */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
        >
          {dots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#4f46e5"
              animate={{ cx: [dot.cx, dot.cx + 20, dot.cx], cy: [dot.cy, dot.cy + 15, dot.cy] }}
              transition={{ duration: 8 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
          ))}

          {lines.map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(79,70,229,0.4)"
              strokeWidth={1}
              animate={{
                x1: [line.x1, line.x1 + 15, line.x1],
                y1: [line.y1, line.y1 + 10, line.y1],
                x2: [line.x2, line.x2 + 15, line.x2],
                y2: [line.y2, line.y2 + 10, line.y2],
              }}
              transition={{ duration: 10 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
          ))}
        </motion.svg>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-8 text-center max-w-xl">

            {/* Image Card */}
            <div className="relative w-72 rounded-2xl bg-gray-900 p-2 shadow-xl">
              <img
                src={cvImage}
                alt="CV"
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/15 hover:bg-black/10 transition" />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500">
                Junior Front-End Developer
              </h1>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Building responsive, interactive, and modern web experiences
                using React, Tailwind CSS, and JavaScript.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.07 1.52 5.78L0 24l6.35-1.67A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52z" />
        </svg>
      </a>
    </>
  );
}
