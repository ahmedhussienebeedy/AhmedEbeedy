import React from "react";
import cvImage from "../../assets/images/cvimage.JPG";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden px-6">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/20140550125?text=Hello%20Ahmed,%20I%20want%20to%20work%20with%20you"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition text-white text-2xl animate-bounce"
      >
        📱
      </a>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cvImage}
          alt="bg"
          className="w-full h-full object-cover opacity-10 blur-3xl scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-gray-950"></div>

        <div className="absolute w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-[90vw] max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
            <img
              src={cvImage}
              alt="Ahmed Ebeedy"
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-white max-w-lg text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Ahmed Ebeedy
          </h1>

          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            React JS Front-End Developer
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I craft modern, high-performance web experiences using React and
            clean UI architecture. Passionate about building scalable and
            visually appealing applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">

            {/* Download CV */}
            <a
              href="/Ahmed-Ebeedy-CV.pdf"
              download
              className="bg-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-600 transition shadow-lg"
            >
              Download CV
            </a>

            {/* Gmail */}
            <a
              href="mailto:ahmedhusseinebedy@gmail.com?subject=Job%20Opportunity&body=Hello%20Ahmed"
              className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition shadow-lg"
            >
              ✉️ Gmail
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}