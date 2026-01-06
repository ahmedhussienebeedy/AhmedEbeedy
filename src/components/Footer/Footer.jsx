import React from "react";
import mylogo from "../../assets/images/mylogo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer({ whatsappNumber, message }) {

  return (
    <footer className="bg-gray-950 text-white py-10 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src={mylogo}
            alt="Ahmed Ebeedy Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <h2 className="text-xl font-bold text-indigo-500">
            Ahmed Ebeedy
          </h2>
        </div>

        {/* Job Title */}
        <p className="text-gray-400 text-sm max-w-md">
          Junior Front-End Developer specialized in building modern,
          responsive, and interactive web applications using React
          and Tailwind CSS.
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <li>
            <Link to="/" className="hover:text-indigo-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-indigo-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/ahmedhussienebeedy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <span className="text-xs text-gray-500">
          © {new Date().getFullYear()} Ahmed Ebeedy. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
